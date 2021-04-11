import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaylisteListeComponent} from './playlistes/playliste-liste/playliste-liste.component';
import {PlaylisteCreateComponent} from './playlistes/playliste-create/playliste-create.component';
import {PageNotFoundedComponent} from './page-not-founded/page-not-founded.component';
import {VideoCreateComponent} from './videos/video-create/video-create.component';
import {VideoListeComponent} from './videos/video-liste/video-liste.component';
export const components = [PlaylisteCreateComponent, PlaylisteListeComponent];
export const componentsVideo = [VideoCreateComponent, VideoListeComponent];
const routes: Routes = [
  {path: '', component : components[0]},
  {path: 'playliste-create', component : components[0]},
  {path: 'playliste-liste', component : components[1]},
 /* {path: '**', component : PageNotFoundedComponent},*/
  {path: 'video-create', component  : componentsVideo[0]},
  {path: 'video-liste', component  : componentsVideo[1]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
