import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.css']
})

export class SongComponent implements OnInit {
    link: string;
    song: Object;

    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
        route.params.subscribe(params => { this.link = params['id']; });
    }

    ngOnInit() {
        this.renderSong(this.link);
    }

    back(): void {
        this.location.back();
    }

    renderSong(url: any): void {
        this.http.request('http://localhost:3000/getSong/' + url)
                 .subscribe((res: Response) => {
            this.song = JSON.parse(res.text());
            console.log(this.song[0].lyric);
        });
    }
}
