import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { userModule } from './userinfo/user.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { informationtechnologyexperienceModule } from './informationtechnologyexperience/informationtechnologyexperience.module';
import { activityModule } from './activity/activity.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    userModule,
    informationtechnologyexperienceModule,
    activityModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: []
})
export class PagesModule { }
