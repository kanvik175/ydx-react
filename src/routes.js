import Settings from './pages/settings/Settings';
import Main from './pages/main/Main';

const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
  }
]

export default routes;