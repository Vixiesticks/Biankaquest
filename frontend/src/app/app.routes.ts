import { Routes, RouterModule } from '@angular/router';
import { Frontpage } from './components/frontpage/frontpage';
import { Comic } from './components/comic/comic';
import { Login } from './components/login/login';
import { AddPanel } from './components/add-panel/add-panel';
import { AddChatter } from './components/add-chatter/add-chatter';
import { Panel } from './components/panel/panel';

export const routes: Routes = [
  {
    path: '',
    component: Frontpage,
  },
  {
    path: 'home',
    component: Frontpage,
  },
  {
    path: 'comics/:id',
    component: Comic,
  },
  {
    path: 'comics/panel/:id',
    component: Panel,
  },
  {
    path: 'comics/panel/:id',
    component: AddChatter,
  },
  {
    path: 'comics/:id/add',
    component: AddPanel,
  },
  {
    path: 'login',
    component: Login,
  },
];
