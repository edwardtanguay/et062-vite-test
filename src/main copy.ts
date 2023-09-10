
import employees from '../employees.json';

interface IUser {
	firstName: string;
	lastName: string;
	age: number
}

const changeProperty = <T extends keyof IUser>(user: IUser, prop: T, value: IUser[T]) => {
	user[prop] = value;
}

const user: IUser = {
	firstName: 'Hans',
	lastName: 'Lefèbvre',
	age: 23
};


console.log(user);
changeProperty(user, "firstName", "Georg");
console.log(user);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>There are ${employees.length} employees.</div>
`



