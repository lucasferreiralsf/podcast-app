import { ApiErrorAlert } from "@/shared/components/error/ApiErrorAlert";
import { PageLayout } from "@/shared/components/layout/PageLayout";
import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import { useState } from "react";
import { PodcastFilter } from "./components/PodcastFilter";
import { PodcastList } from "./components/PodcastList";
import { PodcastListSkeleton } from "./components/PodcastListSkeleton";
import { useFilteredPodcasts } from "./hooks/useFilteredPodcasts";
import { usePodcasts } from "./hooks/usePodcasts";

export function PodcastsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebouncedValue(searchQuery, 300);

  const { data: podcasts, error, refetch, isLoading } = usePodcasts();

  const filteredPodcasts = useFilteredPodcasts(podcasts || [], debouncedSearch);

  if (error) {
    return (
      <PageLayout>
        <ApiErrorAlert error={error as Error} onRetry={() => refetch()} />
      </PageLayout>
    );
  }

  if (isLoading || !podcasts) {
    return (
      <PageLayout>
        <PodcastListSkeleton />
      </PageLayout>
    );
  }

  return (
    <PageLayout maxWidth="wide">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Discover Podcasts
          </h1>
          <p className="text-muted-foreground">
            Browse the top 100 music podcasts and find your next favorite show
          </p>
        </div>

        <PodcastFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={podcasts.length}
          filteredCount={filteredPodcasts.length}
        />

        <PodcastList podcasts={filteredPodcasts} />
      </div>
    </PageLayout>
  );
}
