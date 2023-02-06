import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, TasklistRoutingModule,  ],
  declarations: [TasklistComponent],
})
export class TasklistModule {}
