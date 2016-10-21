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

	getData():IDateData{
		let data:IDateData;
		data = {
			day:   this._day,
			month: this._month,
			year: this._year
		};
		return data; 
	}
	dateString():string{
		return `day: ${this._day}, month: ${this._month}, year: ${this._year} `;
	}
}

//----------------------INTERFACES------------------------
interface IDateData {
	day:number,
	month:string,
	year:number
}

export { SimpleDate };