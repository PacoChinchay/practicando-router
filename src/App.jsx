import "./App.css";
import HomePage from "./pages/Home";
import { Router } from "./Router";
import Page404 from "./pages/404";
import SeachPage from "./pages/SearchPage";
import { Route } from "./Route";
import { lazy } from "react";
import { Suspense } from "react";

const lazyAboutPage = lazy(() => import('./pages/About.jsx'))

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: lazyAboutPage,
  },
  {
    path: "/search/:query",
    Component: SeachPage,
  },
];


function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
