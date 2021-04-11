import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoCreateComponent } from './videos/video-create/video-create.component';
import { VideoListeComponent } from './videos/video-liste/video-liste.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {PlaylistesComponent} from './playlistes/playlistes.component';
import {AppRoutingModule, components, componentsVideo} from './app-routing.module';
/*
import {PlaylisteCreateComponent} from './playlistes/playliste-create/playliste-create.component';
import {PlaylisteListeComponent} from './playlistes/playliste-liste/playliste-liste.component';
*/
import {UserCreateComponent} from './users/user-create/user-create.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UsersComponent} from './users/users.component';
import {ChaineCreateComponent} from './chaines/chaine-create/chaine-create.component';
import {ChainesComponent} from './chaines/chaines.component';
import {ChaineListComponent} from './chaines/chaine-list/chaine-list.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';


@NgModule({
  declarations: [
    AppComponent,
/*VideosComponent,
    VideoCreateComponent,
    VideoListeComponent,*/
  /*  PlaylistesComponent,
    PlaylisteCreateComponent,
    PlaylisteListeComponent,*/
    components,
    componentsVideo,
    UserCreateComponent,
    UserListComponent,
    UsersComponent,
    ChaineCreateComponent,
    ChainesComponent,
    ChaineListComponent,
    MenuComponent,
    PageNotFoundedComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
