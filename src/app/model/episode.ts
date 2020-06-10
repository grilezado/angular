import { Video } from './video';

export class Episode {
  id : Number;
  name : String;
  added : Date;
  data : Array<Video>;
  tvId : Number;
}
