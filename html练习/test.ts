
class Person(){
	name:string;

	constructor(name:string){
		this.name = name;
	}

	greet(){
		return `${this.name}向你问好`;
	}
}

let xiaoming = new Person('xiaoming');
console.log(xiaoming.greet());