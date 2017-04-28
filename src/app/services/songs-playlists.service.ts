import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongsPlaylistsService {
    results: Object;
    query: string;

    constructor(private http: Http) {

    }

    // searchTrack(query: string): Observable<any[]> {
    //     console.log(this.results);
    //     if(!this.results) {
    //         console.log('search');
    //         this.results = this.http.request('http://localhost:3000/csn/songs/' + query).map((res: any) => res.json());
    //     } else
    //     return this.results;
    // }

    searchTrack(query: string): any {
        if(!this.results) {
            return this.http.get('http://localhost:3000/nct/songs/' + query).map((response) => {
                     this.results = response.json();
                     return this.results;
            }).toPromise();
        }
        return this.results;
    }
}
