import { Person } from './Person';


let person = new Person();
let personData = person.getAllData();

let stringToAppend:string = `
<div>
${personData.idSquare}
${personData.id}
${personData.name}
${personData.age}
${personData.sex}
${personData.occupation}
${personData.sexuality}
${personData.deathDate}
</div>
`;

$('div#global_container').append( stringToAppend );

