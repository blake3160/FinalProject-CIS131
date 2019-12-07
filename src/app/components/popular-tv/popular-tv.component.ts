import { Component, OnInit } from '@angular/core';
import { MoviesDBService } from '../moviesDB.service';
import { IMDB } from '../moviesDB.model';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.css']
})
export class PopularTVComponent implements OnInit {

 TVList: IMDB[] = [];


  constructor(private MoviesDBS: MoviesDBService) {



    this.MoviesDBS.getTV().subscribe(TVObs =>{
    this.TVList = TVObs;
      console.log('TV array');
      console.log(this.TVList);
    });

   }

  ngOnInit() {
  }

}
