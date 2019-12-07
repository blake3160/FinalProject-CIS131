import { Component, OnInit } from '@angular/core';
import { MoviesDBService } from '../moviesDB.service';
import { IMDB } from '../moviesDB.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  MovieList: IMDB[] = [];

  TVList: IMDB[] = [];

  
  

  constructor(private MoviesDBS: MoviesDBService) {

    this.MoviesDBS.getMovies().subscribe(MoviesObs =>{
    this.MovieList = MoviesObs;
      console.log('Movie array');
      console.log(this.MovieList);
    });

    this.MoviesDBS.getTV().subscribe(TVObs =>{
    this.TVList = TVObs;
      console.log('TV array');
      console.log(this.TVList);
    });

   }

  ngOnInit() {
  }

}
