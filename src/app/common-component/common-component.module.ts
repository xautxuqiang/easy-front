import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UIRouterModule } from '@uirouter/angular';
import { commonComponentStates } from './common-component.states';
import { Star1Component } from './star1/star1.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({states : commonComponentStates})
  ],
  declarations: [IndexComponent, Star1Component]
})
export class CommonComponentModule { }
