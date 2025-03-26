import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/solid-router';
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { render } from 'solid-js/web';

import './styles.css';

import App from './App.tsx';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router;
  }
}

function MainApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const rootElement = document.getElementById('app');
if (rootElement) {
  render(() => <MainApp />, rootElement);
}
