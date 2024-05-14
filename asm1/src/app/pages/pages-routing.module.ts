import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { userComponent } from './userinfo/user.component';
import { SkillComponent } from './skill/skill.component';
import { certificateComponent } from './certificate/certificate.component';
import { recruitmentComponent } from './recruitment/recruitment.component';
import { usersComponent } from './users/users.component';
import { informationtechnologyexperienceComponent } from './informationtechnologyexperience/informationtechnologyexperience.component';
import { activityComponent } from './activity/activity.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Trang chủ'},
    },
    {
      path: 'users',
      component: usersComponent,
      data: {breadcrumb: 'Thông tin đăng nhập'},
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
      component: recruitmentComponent,
      data: {breadcrumb: ' Quản lý tuyển dụng'},
    },
    {
      path: 'certificate',
      component: certificateComponent,
      data: {breadcrumb: 'Quản lý chứng chỉ'},
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
