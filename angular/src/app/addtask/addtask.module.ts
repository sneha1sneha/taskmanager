import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import {AddtaskRoutingModule} from './addtask-routing-module'
import { AddtaskComponent } from './addtask.component'; 



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, AddtaskRoutingModule,  ],
  declarations: [AddtaskComponent],
})
export class AddtaskModule {}
