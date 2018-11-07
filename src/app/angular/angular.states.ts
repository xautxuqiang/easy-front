import {Ng2StateDeclaration} from '@uirouter/angular';
import {IndexComponent} from './index/index.component';
import {ComponentInteractionComponent} from './component-interaction/component-interaction.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component';
import {DirectiveComponent} from './directive/directive.component';

const angularStateRoot: Ng2StateDeclaration = {
  name: 'angular',
  url: '/angular',
  component: IndexComponent
};

const componentInteractionState: Ng2StateDeclaration = {
  name: 'angular.componentInteraction',
  url: '/component-interaction',
  component: ComponentInteractionComponent
};

const lifeCycleState: Ng2StateDeclaration = {
  name: 'angular.lifeCycle',
  url: '/life-cycle',
  component: LifeCycleComponent
};

const directiveState: Ng2StateDeclaration = {
  name: 'angular.directive',
  url: '/directive',
  component: DirectiveComponent
};

export const angularStates: Ng2StateDeclaration[] = [
  angularStateRoot,
  componentInteractionState,
  lifeCycleState,
  directiveState
];
