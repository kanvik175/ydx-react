import Settings from './pages/settings/Settings';
import Start from './pages/start/Start';

const routes = [
  {
    path: '/',
    component: Start,
    exact: true,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
  }
]

export default routes;