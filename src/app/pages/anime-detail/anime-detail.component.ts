import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JikanAPIService } from '../commons/services/jikan-api.service';
import { REPOSITORY_NAME } from '../commons/constants/constants';


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  constructor(private animeAPI: JikanAPIService, private route:ActivatedRoute) { }

  id:number;
  anime: any;

  ngOnInit(): void {
    this.getAnimeId();
    this.getAnimeData();console.log(this.anime);
  }

  private getAnimeId(){
    this.route.params.subscribe(params => {
      this.id = +params["animeID"];
    });
  }
  private getAnimeData(){
    this.animeAPI.getAnimeById(this.id).subscribe(data => {
      this.anime = data.data;
    });
  }

  public redirectToMainPage(){
    location.href = `/${REPOSITORY_NAME}/anime/search`;
  }
}
