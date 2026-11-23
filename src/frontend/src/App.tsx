import { AppLayout } from "@/components/layout/AppLayout";
import AgentPage from "@/pages/AgentPage";
import CompliancePage from "@/pages/CompliancePage";
import ContentPage from "@/pages/ContentPage";
import LeadsPage from "@/pages/LeadsPage";
import OverviewPage from "@/pages/OverviewPage";
import ProductPage from "@/pages/ProductPage";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: AppLayout });

const routeTree = rootRoute.addChildren([
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: OverviewPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/leads",
    component: LeadsPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/content",
    component: ContentPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/agent",
    component: AgentPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/product",
    component: ProductPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/compliance",
    component: CompliancePage,
  }),
]);

const router = createRouter({ routeTree, scrollRestoration: true });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
