import { Component, OnInit } from '@angular/core';
import {Playliste} from '../../controller/model/playliste.model';
import {PlayListeService} from '../../controller/service/playListe.service';
import {Video} from '../../controller/model/video.model';

@Component({
  selector: 'app-playliste-create',
  templateUrl: './playliste-create.component.html',
  styleUrls: ['./playliste-create.component.css']

})
export class PlaylisteCreateComponent implements OnInit {

  constructor(private playListeService: PlayListeService) { }
  get playliste(): Playliste {
    return this.playListeService.playliste;
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.playListeService.save();
  }
  get video(): Video {
    return this.playListeService.video;
  }
  ngOnInit(): void {
  }

public  addVideo() {
 return this.playListeService.addVideo();
  }
}
