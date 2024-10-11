import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './pages/anime-detail/anime-detail.component';
import { AnimesSearchComponent } from './pages/animes-search/animes-search.component';

const defaultURL = `anime/search/`;
const routes: Routes = [
  {path:`anime/search/:page`, component:AnimesSearchComponent},
  {path:`anime/detail/:animeID`, component:AnimeDetailComponent},
  {path:"", redirectTo:defaultURL, pathMatch:"full"},
  {path:"**", redirectTo:defaultURL, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
