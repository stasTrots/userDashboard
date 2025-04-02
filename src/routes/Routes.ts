import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number];

export const NavRoutes: MenuItem[] = [
  {key: 'dashboard', label: 'Dashboard'}
]
