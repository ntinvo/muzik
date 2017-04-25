import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    query: string;
    songs: Object;
    playlists: Object;
    songsActive: boolean;
    playlistsActive: boolean;

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => { this.query = params['query'] || ''; });
        this.songsActive = true;
        this.playlistsActive = false;
    }

    ngOnInit() {
        // this.songsActive = true;
        // this.playlistsActive = false;
    }

    submit(query: string): void {
        if(query != '') {
            var tmp = query.split(' ').join('+');
            if(this.songsActive) {
                this.router.navigate(['search'], { queryParams: { query: query }}).then(_ => this.makeSongsRequest(tmp) );
            } else {
                this.router.navigate(['search'], { queryParams: { query: query }}).then(_ => this.makePlaylistsRequest(tmp) );
            }
        }
        this.query = query;
    }

    makeSongsRequest(query: string): void {
        this.http.request('http://localhost:3000/songs/' + query)
                 .subscribe((res: Response) => {
            this.songs = res.text();
            console.log(this.songs);
        });
    }

    makePlaylistsRequest(query: string): void {
        this.http.request('http://localhost:3000/playlists/' + query)
                 .subscribe((res: Response) => {
            this.playlists = res.text();
            console.log(this.playlists);
        });
    }

    songsPillClicked(): boolean {
        this.songsActive = true;
        this.playlistsActive = false;
        return false;
    }

    playlistsPillClicked(): boolean {
        this.songsActive = false;
        this.playlistsActive = true;
        return false;
    }
}
