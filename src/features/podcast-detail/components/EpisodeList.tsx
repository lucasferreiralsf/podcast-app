import type { EpisodeEntity } from "@/domain/entities/episode.entity";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Calendar, Clock, Play } from "lucide-react";
import { Link } from "react-router";

interface EpisodeListProps {
  podcastId: string;
  episodes: EpisodeEntity[];
}

export function EpisodeList({ podcastId, episodes }: EpisodeListProps) {
  const formatDuration = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Episodes</CardTitle>
            <CardDescription className="mt-2">
              Click on an episode to start listening
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {episodes.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-40">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </div>
                </TableHead>
                <TableHead className="w-28 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Clock className="h-4 w-4" />
                    Duration
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {episodes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No episodes available
                  </TableCell>
                </TableRow>
              ) : (
                episodes.map((episode) => (
                  <TableRow
                    key={episode.id}
                    className="group hover:bg-muted/50"
                  >
                    <TableCell>
                      <Play className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                        className="text-primary hover:underline font-medium group-hover:text-primary/80 transition-colors"
                      >
                        {episode.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {formatDate(episode.releaseDate)}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground text-sm font-mono">
                      {formatDuration(episode.duration)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
