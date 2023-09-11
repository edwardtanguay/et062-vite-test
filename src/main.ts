
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

const divide = (a: number, b: number) => {
  return a / b;
};

const multiply = (a: number, b: number) => {
  return a * b;
};

const funcs = [add, subtract, divide, multiply];

const processNumbers = (a:number, b:number, func: (a:number, b:number) => number) => {
  return func(a, b);
}

const results = [];
for (const func of funcs) {
  results.push(processNumbers(4, 1, func));
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>Processed numbers are: ${results.join(', ')}</div>
`



