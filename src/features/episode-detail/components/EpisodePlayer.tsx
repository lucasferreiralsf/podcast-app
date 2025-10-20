import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import type { EpisodeEntity } from "@/domain/entities/episode.entity";
import { Calendar, Clock, Headphones } from "lucide-react";

interface EpisodePlayerProps {
  episode: EpisodeEntity;
  podcastId: string;
}

export function EpisodePlayer({ episode }: EpisodePlayerProps) {
  const formatDuration = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} min`;
  };

  return (
    <Card className="flex-1">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(episode.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Badge>
            {episode.duration > 0 && (
              <Badge variant="secondary" className="gap-1">
                <Clock className="h-3 w-3" />
                {formatDuration(episode.duration)}
              </Badge>
            )}
          </div>

          <CardTitle className="text-2xl leading-tight">
            {episode.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {episode.audioUrl ? (
          <div className="rounded-lg border-2 border-primary/20 p-4 bg-muted/50">
            <div className="flex items-center gap-3 mb-3">
              <Headphones className="h-5 w-5 text-primary" />
              <span className="font-semibold">Listen to Episode</span>
            </div>
            <audio
              controls
              className="w-full"
              src={episode.audioUrl}
              preload="metadata"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed p-8 text-center">
            <Headphones className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground">
              No audio available for this episode.
            </p>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">About this episode</h3>
          <div
            className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
