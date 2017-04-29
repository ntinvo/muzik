import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { SongsPlaylistsService } from './services/songs-playlists.service';

const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'song/:id', component: SongComponent},
    { path: 'playlist/:id', component: PlaylistComponent},
    { path: 'search', redirectTo: 'home'},
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)  // Added routes here
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SongComponent,
    PlaylistComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
      SongsPlaylistsService,
      { provide: APP_BASE_HREF, useValue: '/' },
      { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
