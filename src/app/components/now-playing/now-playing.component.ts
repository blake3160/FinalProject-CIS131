import { Component, OnInit } from '@angular/core';
import { MoviesDBService } from '../moviesDB.service';
import { IMDB } from '../moviesDB.model';

@Component({
  selector: 'app-current',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  MovieList: IMDB[] = [];
  

  constructor(private MoviesDBS: MoviesDBService) {

    this.MoviesDBS.getMovies().subscribe(MoviesObs =>{
    this.MovieList = MoviesObs;
      console.log('Movie array');
      console.log(this.MovieList);
    });


   }

  ngOnInit() {
  }

}
