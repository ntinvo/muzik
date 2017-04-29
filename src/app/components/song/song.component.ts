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
        // url = this.encodeURL(url);
        url = encodeURIComponent(url);
        // console.log(url);
        this.http.request('http://localhost:3000/csn/getSong/' + url)
                 .subscribe((res: Response) => {
            this.song = JSON.parse(res.text());
            if(this.song[0].artistImgUrl == 'http://chiasenhac.vn/images/player_csn.png') {
                this.song[0].artistImgUrl = 'https://raw.githubusercontent.com/tinnvo/tinnvo.github.io/master/assets/singer.png';
            }
        });
    }
}
