import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MoviesDBService {

    MovieURL = 'https://api.themoviedb.org/3/movie/popular?api_key=7361388d892a50b989273c69e94b7c38&language=en-US&page=1';

    TVURL = 'https://api.themoviedb.org/3/tv/popular?api_key=7361388d892a50b989273c69e94b7c38&language=en-US&page=1';

    constructor(private http: HttpClient) {

    }

    getMovies(): Observable <any[]> {
        return this.http.get<any[]>(this.MovieURL);
    }

    getTV(): Observable <any[]> {
        return this.http.get<any[]>(this.TVURL);
    }

}