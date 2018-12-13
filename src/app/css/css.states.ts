import { Ng2StateDeclaration } from '@uirouter/angular';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog/blog.component';
import { FlexComponent } from './flex/flex.component';
import { FlexDiceComponent } from './flex-dice/flex-dice.component';

const cssStateRoot: Ng2StateDeclaration = {
  name: 'css',
  url: '/css',
  component: IndexComponent
};

const cssBlogState: Ng2StateDeclaration = {
  name: 'css.blog',
  url: '/blog',
  component: BlogComponent
};

const cssFlexState: Ng2StateDeclaration = {
  name: 'css.flex',
  url: '/flex',
  component: FlexComponent
};

const cssFlexDiceState: Ng2StateDeclaration = {
  name: 'css.flexDice',
  url: '/flex-dice',
  component: FlexDiceComponent
};

export const cssStates: Ng2StateDeclaration[] = [
  cssStateRoot,
  cssBlogState,
  cssFlexState,
  cssFlexDiceState
];
