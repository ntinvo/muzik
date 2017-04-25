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

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => { this.query = params['query'] || ''; });
    }

    ngOnInit() {
        // this.query = this.query.split('+').join(' ');   // reverse the value of the input field
        // this.makeSongsRequest(this.query);
    }

    submit(query: string): void {
        if(query != '') {
            var tmp = query.split(' ').join('+');

            this.router.navigate(['search'], { queryParams: { query: query } })
                .then(_ => this.makeSongsRequest(tmp) );
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
        this.http.request('http://localhost:3000/playlists/ba+cham' + query)
                 .subscribe((res: Response) => {
            this.playlists = res.text();
        });
    }
}
