import { RunTimeLayoutConfig } from '@umijs/max';
import { CustomSider } from '@/components/Sider';

export const layout: RunTimeLayoutConfig = () => {

  return {
    title: '',
    layout: 'side',
    menuRender: false,
    childrenRender: (children) => {
      return (
        <div style={{ display: 'flex' }}>
          <CustomSider />
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      );
    },
  };
};