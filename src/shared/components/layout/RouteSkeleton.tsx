import { useLocation, useNavigation } from "react-router";
import { PodcastListSkeleton } from "@/features/podcasts/components/PodcastListSkeleton";
import { PodcastDetailSkeleton } from "@/features/podcast-detail/components/PodcastDetailSkeleton";
import { EpisodeDetailSkeleton } from "@/features/episode-detail/components/EpisodeDetailSkeleton";

export function RouteSkeleton() {
  const location = useLocation();
  const navigation = useNavigation();

  const targetPath = navigation.location?.pathname || location.pathname;

  if (targetPath === "/") {
    return <PodcastListSkeleton />;
  }

  if (targetPath.match(/^\/podcast\/[^/]+\/episode\/.+$/)) {
    return <EpisodeDetailSkeleton />;
  }

  if (targetPath.match(/^\/podcast\/.+$/)) {
    return <PodcastDetailSkeleton />;
  }

  return <PodcastListSkeleton />;
}

