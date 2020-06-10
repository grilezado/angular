import { Actor } from './actor';

export class DramaInfo {
  id : Number;
  title : String;
  otherNames : Array<String>;
  country : String;
  genre : Array<String>;
  description : String;
  status : Boolean; // 0 - Ongoing, 1 - Complete
  views : Number;
  casts : Array<Actor>;
}
