import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongsPlaylistsService {
    results: Object;
    query: string;

    constructor(private http: Http) { }

    searchSongs(query: string): any {
        if(!this.results || this.query !== query) {
            this.results = this.http.get('https://muzik-scraper.herokuapp.com/nct/songs/' + query).map((response) => {
            // this.results = this.http.get('http://localhost:3000/nct/songs/' + query).map((response) => {
                return response.json();
            }).toPromise();
            this.query = query;
            return this.results;
        }
        return this.results;
    }

    getSong(url: string): any {
        return this.http.get('https://muzik-scraper.herokuapp.com/nct/getSong/' + url).map((response) => {
        // return this.http.get('http://localhost:3000/nct/getSong/' + url).map((response) => {
            return response.json();
        }).toPromise();
    }
}
