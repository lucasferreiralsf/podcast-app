import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface SidebarProps {
  podcastId: string;
  image: string;
  title: string;
  author: string;
  description: string;
}

export function Sidebar({
  podcastId,
  image,
  title,
  author,
  description,
}: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <Card className="sticky top-20">
        <CardHeader className="space-y-4 p-4">
          <Link to={`/podcast/${podcastId}`} className="block group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full aspect-square object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4 p-4 pt-0">
          <div className="border-b pb-4">
            <Link to={`/podcast/${podcastId}`}>
              <CardTitle className="hover:text-primary transition-colors text-lg leading-tight mb-2">
                {title}
              </CardTitle>
            </Link>
            <Link to={`/podcast/${podcastId}`}>
              <CardDescription className="italic hover:text-foreground transition-colors flex items-center gap-1">
                <span className="text-xs">by</span>
                <span className="font-medium">{author}</span>
              </CardDescription>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm uppercase text-muted-foreground">
              Description
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
