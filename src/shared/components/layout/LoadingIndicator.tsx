import { useIsFetching } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

export function LoadingIndicator() {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-primary">
      <Loader2 className="h-5 w-5 animate-spin" />
      <span className="text-sm font-medium hidden sm:inline">Loading...</span>
    </div>
  );
}
