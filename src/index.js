import GlobalStyle from "./global.styled";
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

const App = lazy(() => import("./App"));

// Rendering main component as well as global styles...
root.render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="page-loader">
          <h1>Future Of Stroy</h1>
        </div>
      }
    >
      <App />
    </Suspense>
    <GlobalStyle />
  </StrictMode>
);