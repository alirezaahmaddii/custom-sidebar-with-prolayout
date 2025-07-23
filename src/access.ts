export default (initialState: API.UserInfo) => {
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  return {
    canSeeAdmin,
  };
};

export const routes = [
  {
    path: '/home',
    component: './Home',
    access: 'canReadPageA',
  },
];