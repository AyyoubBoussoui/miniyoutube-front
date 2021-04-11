import {Chaine} from './chaine.model';
import {Video} from './video.model';

export class Playliste {
  public id: number;
  public ref: string;
   public titre: string;
  public description: string;
  public listeVideos = new Array<Video>();

}
