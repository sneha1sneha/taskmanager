import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HeaderuserComponent } from './headeruser.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { TasklistComponent } from '@app/tasklist/tasklist.component';

const routes: Routes = [
//   Shell.childRoutes([
//     { path: '', redirectTo: '', pathMatch: 'full' },
//     // { path: 'Homeuser', component: HeaderuserComponent,canActivate:[AuthenticationGuard], data: { title: marker('Homeuser') } },
//     // { path: 'tasklist', component: TasklistComponent,canActivate:[AuthenticationGuard], data: { title: marker('Tasklist') } },
//     // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
//   ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HeaderuserRoutingModule {

}
