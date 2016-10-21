import { Person } from './Person';




_(20).times( createAndPrintPerson );




function createAndPrintPerson():void{
	let person = new Person();
	let personData = person.getAllData();

	let stringToAppend:string = `
	<li class="person">
	<div class="id_square">${personData.idSquare.html()}</div>
	<span class="id">#${personData.id}</span>
	<span class="name">${personData.name}</span>
	<span class="age">${personData.age}</span>
	<span class="sex">${personData.sex}</span>
	<span class="occupation">${personData.occupation}</span>
	<span class="sexuality">${personData.sexuality}</span>
	<span class="death_day">${personData.deathDate.getData().day}</span>
	<span class="death_month">${personData.deathDate.getData().month}</span>
	<span class="death_year">${personData.deathDate.getData().year}</span>
	</li>
	`;

	$('div#global_container ul.person_list').append( stringToAppend );
}