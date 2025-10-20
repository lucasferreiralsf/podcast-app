import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";
import { useState } from "react";
import { PodcastFilter } from "./components/PodcastFilter";
import { PodcastList } from "./components/PodcastList";
import { useFilteredPodcasts } from "./hooks/useFilteredPodcasts";
import { usePodcasts } from "./hooks/usePodcasts";

export function PodcastsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebouncedValue(searchQuery, 300);

  const { data: podcasts } = usePodcasts();

  const filteredPodcasts = useFilteredPodcasts(podcasts, debouncedSearch);

  return (
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
  );
}
