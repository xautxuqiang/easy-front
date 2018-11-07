import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { angularStates } from './angular.states';

import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ParentComponent} from './component-interaction/parent/parent.component';
import { Parent1Component } from './component-interaction/parent1/parent1.component';
import { Parent2Component } from './component-interaction/parent2/parent2.component';
import { Parent3Component } from './component-interaction/parent3/parent3.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { Child1Component } from './component-interaction/child1/child1.component';
import { Child2Component } from './component-interaction/child2/child2.component';
import { IndexComponent } from './index/index.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PeekABooParentComponent } from './life-cycle/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './life-cycle/peek-a-boo/peek-a-boo.component';
import { OnChangesParentComponent } from './life-cycle/on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './life-cycle/on-changes/on-changes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { PropertyDirectiveComponent } from './directive/property-directive/property-directive.component';
import { HighlightDirective } from './directive/property-directive/highlight.directive';
import { CountingDirective } from './directive/property-directive/counting.directive';
import { StructureDirectiveComponent } from './directive/structure-directive/structure-directive.component';
import { UnlessDirective } from './directive/structure-directive/unless.directive';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({states: angularStates}),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentInteractionComponent,
    ParentComponent,
    Parent1Component,
    Parent2Component,
    Parent3Component,
    ChildComponent,
    Child1Component,
    Child2Component,
    IndexComponent,
    LifeCycleComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    DirectiveComponent,
    PropertyDirectiveComponent,
    HighlightDirective,
    CountingDirective,
    StructureDirectiveComponent,
    UnlessDirective
  ]
})
export class AngularModule { }
