import { render } from 'solid-js/web';

import UserList from './UserList';

export default function userListLauncher(element: HTMLElement) {
  render(() => <UserList />, element);
}
