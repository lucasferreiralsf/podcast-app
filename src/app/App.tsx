import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";
import { AppRouter } from "./router";
import { QueryProvider } from "./providers/QueryProvider";

function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;
