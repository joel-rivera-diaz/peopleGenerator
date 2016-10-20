/**
 * Person
 */
class Person {
	private _idSquare:any;
	private _name:string;
	private _sex:string;
	private _sexuality:string;
	private _age:number;
	private _deathDate:string;
	private _occupation:string;
	
	constructor(  ) {
		
	}
	public generateIdSquare():void{
		//this will filll the 20x20 pixels idSquare
		_(25).times(()=>{
			let randColor = chance.color();
			$('div#delete_me').append( $(`<div class="bit" style="background-color:${randColor}"></div>`) );
		
		})
			
	}
}

export { Person };