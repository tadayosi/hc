import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import { hc } from '../hc';

function registerExamples() {
  hc
    .addPlugin({
      id: 'app1',
      title: 'App 1',
      path: '/app1',
      component: App1,
    })
    .addPlugin({
      id: 'app2',
      title: 'App 2',
      path: '/app2',
      component: App2,
    })
    .addPlugin({
      id: 'app3',
      title: 'App 3',
      path: '/app3',
      component: App3,
    });
}

export default registerExamples;
