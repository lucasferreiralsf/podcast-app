import { ErrorBoundary } from "@/shared/components/error/ErrorBoundary";
import { AppRouter } from "./router";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
