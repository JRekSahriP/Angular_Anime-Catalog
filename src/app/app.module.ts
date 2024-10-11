import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnimeCardComponent } from './pages/animes-search/components/anime-card/anime-card.component';
import { AnimeListComponent } from './pages/animes-search/components/anime-list/anime-list.component';
import { AnimesSearchComponent } from './pages/animes-search/animes-search.component';
import { AnimeDetailComponent } from './pages/anime-detail/anime-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeCardComponent,
    AnimeListComponent,
    AnimesSearchComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
