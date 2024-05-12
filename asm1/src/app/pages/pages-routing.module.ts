import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { userComponent } from './userinfo/user.component';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { activityComponent } from './activity/activity.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'userinfo',
      component: userComponent,
      data: {breadcrumb: 'User'},
    },
    {
      path: 'informationtechnologyexperience',
      component: informationtechnologyexperienceComponent,
      data: {breadcrumb: 'informationtechnologyexperience'},
    },
    {
      path: 'activity',
      component: activityComponent,
      data: {breadcrumb: 'activity'},
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
