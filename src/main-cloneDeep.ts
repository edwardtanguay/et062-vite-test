import { cloneDeep } from 'lodash-es';

const instrument1 = {
  type: 'violin',
  size: '4/4',
  start: new Date(),
  testNesting : {
    a : 12,
    b : [1, 2, 3, 4]
  }
};

const instrument2 = cloneDeep(instrument1);

instrument2.size = '2/4';
instrument2.testNesting.b[0] = 999;

console.log('cloneDeep', instrument1);
console.log('cloneDeep', instrument2);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>test</div>
`



