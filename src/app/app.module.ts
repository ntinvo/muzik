import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

const routes : Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', component: HomeComponent},
    { path: 'tracks/:id', component: SongComponent},
    { path: 'albums/:id', component: PlaylistComponent},
    { path: 'contactus', redirectTo: 'contact'},
];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SongComponent,
    PlaylistComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
