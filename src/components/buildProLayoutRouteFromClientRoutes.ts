// utils/buildProLayoutRoute.ts
export function buildProLayoutRouteFromClientRoutes(clientRoutes: any[]) {
  const layoutRoute = clientRoutes.find(
    (route) => route.isLayout && Array.isArray(route.children)
  );

  if (!layoutRoute) return { path: '/', routes: [] };

  const formatRoutes = (routes: any[]): any[] =>
    routes
      .filter(
        (route) =>
          route.path &&
          !route.isLayout &&
          !route.path.includes('components') &&
          !route.path.startsWith('/:')
      )
      .map((route) => {
        const fullPath = route.path.startsWith('/')
          ? route.path
          : '/' + route.path;

        const cleanPath = fullPath.replace(/\/index$/, '');
        const name = cleanPath.replace(/^\/|\/$/g, '') || 'Home';

        return {
          path: fullPath,
          name,
          routes: route.children ? formatRoutes(route.children) : undefined,
        };
      });

  return {
    path: '/',
    routes: formatRoutes(layoutRoute.children),
  };
}
