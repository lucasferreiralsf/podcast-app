import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface ApiErrorAlertProps {
  error: Error;
  onRetry?: () => void;
}

export function ApiErrorAlert({ error, onRetry }: ApiErrorAlertProps) {
  const getUserFriendlyMessage = (error: Error): string => {
    if (error.message.includes('Failed to fetch') || error.message.includes('Network')) {
      return 'Unable to connect to the server. Please check your internet connection.';
    }

    if (error.message.includes('not found')) {
      return 'The requested content could not be found.';
    }

    if (error.message.includes('timeout')) {
      return 'The request took too long to complete. Please try again.';
    }

    return 'An error occurred while loading the data. Please try again.';
  };

  return (
    <div className="flex items-center justify-center p-8">
      <Card className="w-full max-w-md border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Error Loading Data</CardTitle>
          <CardDescription>
            {getUserFriendlyMessage(error)}
          </CardDescription>
        </CardHeader>
        {onRetry && (
          <CardContent>
            <Button onClick={onRetry} variant="default">
              Try Again
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
