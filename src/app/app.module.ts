import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';
import { HeaderComponent } from './components/header/header.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularTVComponent } from './components/popular-tv/popular-tv.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    HeaderComponent,
    NowPlayingComponent,
    PopularTVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: CurrentComponent },
      {path: 'Movies', component: NowPlayingComponent},
      {path: 'TV', component: PopularTVComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
