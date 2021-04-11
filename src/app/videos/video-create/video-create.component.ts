import { Component, OnInit } from '@angular/core';
import {Video} from '../../controller/model/video.model';
import {VideoService} from '../../controller/service/video.service';
import {PlayListeService} from '../../controller/service/playListe.service';
import {Playliste} from '../../controller/model/playliste.model';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  constructor(private videoService: VideoService, public playlisteService: PlayListeService) { }
  public save(){
    this.videoService.save();
  }
 public savePlayListe(){
    this.playlisteService.save();
    this.videoService.save();
 }
  public addVideo(){
    this.playlisteService.addVideo();
  }
 get playliste(): Playliste{
    return this.playlisteService.playliste;
 }
 public findVideo(ref: string){
    this.videoService.findVideo(ref);
 }
/*public searchVideo(){
    this.videoService.searchVideo();
}*/

  ngOnInit(): void {
  }
get video(): Video {
return this.videoService.video;
}
}
