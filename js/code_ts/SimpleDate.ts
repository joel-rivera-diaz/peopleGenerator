/**
 * SimpleDate
 */
class SimpleDate {
	private _day:number;
	private _month:string;
	private _year:number;
	
	constructor( day:number, month:string, year:number ) {
		this._day = day;
		this._month = month;
		this._year = year;
	}

	getData():Object{
		return {
			day:   this._day,
			month: this._month,
			yeart: this._year
		}
	}
	dateString():string{
		return `day: ${this._day}, month: ${this._month}, year: ${this._year} `;
	}
}


export { SimpleDate };