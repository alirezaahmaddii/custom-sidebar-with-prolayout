// components/CustomSider.tsx
import { useAppData, useLocation, history } from '@umijs/max';
import { ProLayout } from '@ant-design/pro-components';
import { useMemo } from 'react';
import { buildProLayoutRouteFromClientRoutes } from './buildProLayoutRouteFromClientRoutes';

export const CustomSider = (props: { children: React.ReactNode }) => {
  const { clientRoutes } = useAppData();
  const location = useLocation();

  const proLayoutRoute = useMemo(
    () => buildProLayoutRouteFromClientRoutes(clientRoutes),
    [clientRoutes]
  );

  return (
    <ProLayout
      route={proLayoutRoute}
      location={location}
      layout="side"
      collapsed={false}
      collapsedButtonRender={false}
      menuItemRender={(item, dom) => (
        <a
          onClick={(e) => {
            e.preventDefault();
            if (item.path) history.push(item.path);
          }}
        >
          {dom}
        </a>
      )}
    >
      {props.children}
    </ProLayout>
  );
};
