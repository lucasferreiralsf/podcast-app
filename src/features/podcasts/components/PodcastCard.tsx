import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { PodcastListItem } from "@/domain/entities/podcast.entity";

interface PodcastCardProps {
  podcast: PodcastListItem;
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <Link to={`/podcast/${podcast.id}`} className="block group">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-2 hover:border-primary/20">
        <CardHeader className="p-0">
          <div className="aspect-square overflow-hidden bg-muted relative">
            <img
              src={podcast.image}
              alt={podcast.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-1">
          <CardTitle className="text-base line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {podcast.name}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-1 flex items-center gap-1">
            <span className="text-muted-foreground">by</span>
            <span className="font-medium">{podcast.artist}</span>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
