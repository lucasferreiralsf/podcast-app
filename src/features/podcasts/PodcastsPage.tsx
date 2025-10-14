import { PageLayout } from "@/shared/components/layout/PageLayout";

export function PodcastsPage() {
  return (
    <PageLayout maxWidth="wide">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Discover Podcasts
          </h1>
          <p className="text-muted-foreground">
            Browse the top 100 music podcasts and find your next favorite show
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
