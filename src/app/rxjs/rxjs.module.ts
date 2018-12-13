import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UIRouterModule } from '@uirouter/angular';
import { rxjsStates } from './rxjs.states';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: rxjsStates})
  ],
  declarations: [IndexComponent]
})
export class RxjsModule { }
