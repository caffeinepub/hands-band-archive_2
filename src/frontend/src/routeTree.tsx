import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import MembersPage from "./pages/MembersPage";
import MusicPage from "./pages/MusicPage";
import UpdatesPage from "./pages/UpdatesPage";
import VideoPage from "./pages/VideoPage";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/members",
  component: MembersPage,
});

const musicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/music",
  component: MusicPage,
});

const updatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/updates",
  component: UpdatesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const videoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/video",
  component: VideoPage,
});

export const routeTree = rootRoute.addChildren([
  landingRoute,
  homeRoute,
  aboutRoute,
  membersRoute,
  musicRoute,
  updatesRoute,
  contactRoute,
  videoRoute,
]);
