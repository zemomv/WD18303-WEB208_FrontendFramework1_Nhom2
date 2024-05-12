import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { userComponent } from './userinfo/user.component';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { activityComponent } from './activity/activity.component';
import { SkillComponent } from './skill/skill.component';

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
      data: {breadcrumb: 'Thông tin nhân viên'},
    },
    {
      path: 'skill',
      component: SkillComponent,
      data: {breadcrumb: 'Kỹ năng làm việc'},
    },
    {
      path: 'recruitment',
      component: SkillComponent,
      data: {breadcrumb: ' Quản lý tuyển dụng'},
    },
    {
      path: 'certificate',
      component: SkillComponent,
      data: {breadcrumb: 'Quản lý chứng chỉ'},
    },
    
    {
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
