import { Ng2StateDeclaration } from '@uirouter/angular';
import { IndexComponent } from './index/index.component';
import { Star1Component } from './star1/star1.component';

const stateRoot: Ng2StateDeclaration = {
  name: 'commonComponent',
  url: '/common-component',
  component: IndexComponent
};

const stateStar1: Ng2StateDeclaration = {
  name: 'commonComponent.star1',
  url: '/star1',
  component: Star1Component
};

export const commonComponentStates: Ng2StateDeclaration[] = [
  stateRoot,
  stateStar1
];
