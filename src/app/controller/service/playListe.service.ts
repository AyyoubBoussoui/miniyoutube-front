import { Injectable } from '@angular/core';
import {Playliste} from '../model/playliste.model';
import {HttpClient} from '@angular/common/http';
import {Video} from '../model/video.model';
import {VideoService} from './video.service';

@Injectable({
  providedIn: 'root'
})
export class PlayListeService {
private _playliste: Playliste;
private _playlistes: Array<Playliste>;
  private _index: number;
  private _video: Video;

  private _urlBase = 'http://localhost:8036';
  private _url = '/application/PlayListe';
  public videoService: VideoService;
// tslint:disable-next-line:typedef

  get video(): Video {
    if (this._video == null){
      this._video = new Video();
    }
    return this._video;
  }

  set video(value: Video) {
    this._video = value;
  }



  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get urlBase(): string {
    return this._urlBase;
  }

  set urlBase(value: string) {
    this._urlBase = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public save(){
  if  (this.playliste.id == null){
    console.log(this.playliste.listeVideos);
    this.http.post('http://localhost:8036/application/PlayListe/', this.playliste ).subscribe(
      data => {
        if (data >= 1){this.init();
        this.playlistes.push(this.clone(this.playliste)); }else {
          alert('error accrues during the creation ' + data);
        }
      }
    );
  }
  else {
    this.playlistes[this._index] = this.clone(this.playliste) ;
  }
  this.playliste = null;
}

  constructor(private http: HttpClient) { }

  public update(index: number, playliste: Playliste){
  this.playliste = this.clone(playliste) ;
  this._index = index;
  }
  public init(){
    this.http.get<Array<Playliste>>('http://localhost:8036/application/PlayListe/').subscribe(
      data => {
        this.playlistes = data;
      }, error  => {
        console.log(error);
      }
    );
  }



get playlistes(): Array<Playliste> {
    if (this._playlistes == null){ this._playlistes = new Array<Playliste>(); }
    return this._playlistes;
  }

  private clone(playliste: Playliste) {
    const  myClone = new Playliste();
    myClone.ref = playliste.ref;
    myClone.titre = playliste.titre;
    myClone.description = playliste.description;
    myClone.listeVideos = playliste.listeVideos;
    return myClone;
  }
  set playlistes(value: Array<Playliste>) {
    this._playlistes = value;
  }

  get playliste(): Playliste {
    if ( this._playliste == null){this._playliste = new Playliste(); }
    return this._playliste;
  }

  set playliste(value: Playliste) {
    this._playliste = value;
  }

  public addVideo() {
    this.playliste.listeVideos.push(this.cloneVideo(this.video));
    console.log(this.playliste.listeVideos);
    this.video = null;
  }
  public cloneVideo(video: Video) {
    const myClone = new Video();
    myClone.ref = video.ref;
    /* myClone.path = video.path;
     myClone.url = video.url;*/
    myClone.totalVue = video.totalVue;
    /*  myClone.description = video.description;
      myClone.dislikes = video.dislikes;
      myClone.likes = video.likes;
      myClone.dateUpload = video.dateUpload;
      myClone.tags = video.tags;*/
    myClone.titre = video.titre;
    myClone.playListe = video.playListe;
    return myClone;
  }

  delete(ref: string) {
    console.log(ref);
    // @ts-ignore
    this.http.delete(this.urlBase + this.url + '/ref/' + ref).subscribe(
      data => {console.log(data);
        this.init();
      }
    );
  }
}
