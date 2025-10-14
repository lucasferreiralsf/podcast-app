import { Input } from '@/shared/components/ui/input';
import { Badge } from '@/shared/components/ui/badge';
import { Card } from '@/shared/components/ui/card';
import { Search } from 'lucide-react';

interface PodcastFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function PodcastFilter({
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: PodcastFilterProps) {
  const isFiltering = searchQuery.trim().length > 0;

  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search podcasts by title or author..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10"
          />
        </div>
        <Badge variant="secondary" className="text-sm px-4 py-2">
          {filteredCount} of {totalCount} podcasts
        </Badge>
      </div>

      {isFiltering && (
        <p className="text-sm text-muted-foreground mt-4">
          Found {filteredCount} podcast{filteredCount !== 1 ? 's' : ''} matching <span className="font-medium text-foreground">"{searchQuery}"</span>
        </p>
      )}
    </Card>
  );
}
