import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TasklistadminRoutingModule } from './tasklistadmin-routing.module';
import { TasklistadminComponent } from './tasklistadmin.component';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, TasklistadminRoutingModule,  ],
  declarations: [TasklistadminComponent],
})
export class TasklistadminModule {}
