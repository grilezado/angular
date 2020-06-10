export class Actor {
  name : String;
  nativeName : String;
  nationality : String;
  gender : String;
  dateOfBirth : Date;
  summary : String;

  constructor(actor){
    this.name = actor.name;
    this.nativeName = actor.nativeName;
    this.nationality = actor.nationality;
    this.gender = actor.gender;
    this.dateOfBirth = actor.dateOfBirth;
    this.summary = actor.summary;
  }
}
