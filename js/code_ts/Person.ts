import { globals } from './globals';
import { SimpleDate } from './SimpleDate';

/**
 * Person
 */
class Person {
	private _idSquare:JQuery;
	private _id:string;
	private _name:string;
	private _sex:string;
	private _sexuality:string;
	private _age:number;
	private _deathDate:SimpleDate;
	private _occupation:string;
	
	constructor(  ) {
		globals.peopleCreated++;
		this._id = this.generateId();
		this._idSquare = this.generateIdSquare();
		this._name = chance.name();
		this._sex = chance.pickone( ['male','female'] );
		this._sexuality = this.generateSexuality();
		this._age = chance.age();
		this._deathDate = this.generateDeathDate();
		this._occupation = this.generateOccupation();
	}

	//========================================================================
	//                            Public Methods
	//========================================================================
	public getData():Object{
		return {
			id:         this._id,
			idSquare:   this._idSquare,
			name:       this._name,
			sex:        this._sex,
			sexuality:  this._sexuality,
			age:        this._age,
			deathDate:  this._deathDate,
			occupation: this._occupation
		}
	}

	//========================================================================
	//                           Generator methods
	//========================================================================
	
	//---------------------------------------------------------
	private generateIdSquare():JQuery{
		//create the idSquare
		let squareToFill = $(`<div class="id_square" id="${this._id}"></div>`);

		//this will filll the 20x20 pixels idSquare
		_(25).times(()=>{
			let randColor = chance.color();
			squareToFill.append( $(`<div class="bit" style="background-color:${randColor}"></div>`) );
		})
		return squareToFill;
	}

	//---------------------------------------------------------
	private generateId(  ):string{
		return `person_${globals.peopleCreated}`;
	}

	//---------------------------------------------------------
	private generateSexuality():string{
		let posibilityArray:string[] = [];
		_(100).times( ()=> posibilityArray.push( 's' ) );
		_( 5 ).times( ()=> posibilityArray.push( 'g' ) );
		_( 1 ).times( ()=> posibilityArray.push( 'a' ) );

		let chosen:string = chance.pickone( posibilityArray );
		let fullNameSexuality:string;
		
		if      ( chosen == 's' ) fullNameSexuality = 'straight';
		else if ( chosen == 'g' ) fullNameSexuality = 'gay';
		else if ( chosen == 'a' ) fullNameSexuality = 'asexual';

		return fullNameSexuality;

	}

	//---------------------------------------------------------
	private generateDeathDate():SimpleDate{
		let day   = _.random( 0, 28 );
		let month = chance.month();
		let year  = _.random( 2000, 2015 );
		let date = new SimpleDate( day, month, year );
		return date;
	}

	//---------------------------------------------------------
	private generateOccupation():string{
		const industries:string[] = [
			'arts', 
			'health', 
			'law', 
			'food', 
			'economics',
			'maintenance',
			'domestic',
			'engineering',
			'transportation',
			'sports',
			'academics',
			'religious',
			'administrative',
			'commerce'
			];
		return chance.pickone( industries );
	}
}

export { Person };