import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongsPlaylistsService {
    results: Object;
    query: string;

    constructor(private http: Http) { }

    // searchTrack(query: string): Observable<any[]> {
    //     console.log(this.results);
    //     if(!this.results) {
    //         console.log('search');
    //         this.results = this.http.request('http://localhost:3000/csn/songs/' + query).map((res: any) => res.json());
    //     } else
    //     return this.results;
    // }

    searchTrack(query: string): Object {

        // if(!this.results) {
            this.http.request('http://localhost:3000/csn/songs/' + query)
                     .subscribe((res: Response) => {
                this.results = JSON.parse(res.text());
                return this.results;
            });
        // // }
        // console.log("INSERVICE");
        // console.log(this.results);
        // return this.results;
    }
}
