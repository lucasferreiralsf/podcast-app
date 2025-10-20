import { Sidebar } from "@/shared/components/layout/Sidebar";
import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { EpisodeList } from "./components/EpisodeList";
import { usePodcastDetail } from "./hooks/usePodcastDetail";

export function PodcastDetailPage() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const navigate = useNavigate();

  const { data } = usePodcastDetail(podcastId!);
  const { podcast, episodes } = data;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Podcasts
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
        <EpisodeList podcastId={podcast.id} episodes={episodes} />
      </div>
    </div>
  );
}
