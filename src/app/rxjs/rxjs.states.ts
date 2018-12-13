import { Ng2StateDeclaration } from '@uirouter/angular';
import { IndexComponent } from './index/index.component';

const rxjsStateRoot: Ng2StateDeclaration = {
  name: 'rxjs',
  url: '/rxjs',
  component: IndexComponent
};

export const rxjsStates: Ng2StateDeclaration[] = [
  rxjsStateRoot
];
