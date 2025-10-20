import { ApiErrorAlert } from "@/shared/components/error/ApiErrorAlert";
import { Breadcrumbs } from "@/shared/components/layout/Breadcrumbs";
import { PageLayout } from "@/shared/components/layout/PageLayout";
import { Sidebar } from "@/shared/components/layout/Sidebar";
import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { usePodcastDetail } from "../podcast-detail/hooks/usePodcastDetail";
import { EpisodePlayer } from "./components/EpisodePlayer";

export function EpisodeDetailPage() {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const navigate = useNavigate();

  const { data, error, refetch } = usePodcastDetail(podcastId!);

  if (error) {
    return (
      <PageLayout>
        <ApiErrorAlert error={error as Error} onRetry={() => refetch()} />
      </PageLayout>
    );
  }

  if (!data) {
    return null;
  }

  const { podcast, episodes } = data;

  const episode = episodes.find(
    (ep) => String(ep.trackId) === episodeId || ep.id === episodeId
  );

  if (!episode) {
    return (
      <PageLayout>
        <ApiErrorAlert
          error={new Error("Episode not found")}
          onRetry={() => refetch()}
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      maxWidth="wide"
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: podcast.name,
              path: `/podcast/${podcastId}`,
            },
            {
              label: episode.title,
              path: `/podcast/${podcastId}/episode/${episodeId}`,
            },
          ]}
        />
      }
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/podcast/${podcastId}`)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Episodes
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar
            podcastId={podcast.id}
            image={podcast.image}
            title={podcast.name}
            author={podcast.artist}
            description={podcast.summary}
          />
          <EpisodePlayer episode={episode} podcastId={podcastId!} />
        </div>
      </div>
    </PageLayout>
  );
}
