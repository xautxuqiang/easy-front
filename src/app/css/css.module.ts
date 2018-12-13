import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UIRouterModule } from '@uirouter/angular';
import { cssStates } from './css.states';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { FlexComponent } from './flex/flex.component';
import { FlexDiceComponent } from './flex-dice/flex-dice.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: cssStates})
  ],
  declarations: [IndexComponent, BlogComponent, Blog1Component, FlexComponent, FlexDiceComponent]
})
export class CssModule { }
