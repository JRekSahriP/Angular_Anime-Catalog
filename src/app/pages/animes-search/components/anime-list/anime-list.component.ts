import { Component, Input, OnInit } from '@angular/core';
import { JikanAPIService } from 'src/app/pages/commons/services/jikan-api.service';
import { REPOSITORY_NAME } from 'src/app/pages/commons/constants/constants';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  constructor(private animeApi: JikanAPIService) { }
  
  animeList:any[] = [];
  isLoading:boolean = true;

  @Input() page:number;
  @Input() search:string;


  ngOnInit():void {
    this.getAnimes();
  }

  private getAnimes() {
    
    if(!this.search || this.search.trim().length === 0){
      this.animeApi.getPopularAnimes(this.page).subscribe(data => {
        this.animeList = data.data;
        this.sortList();
      });
    } else {
      this.animeApi.searchAnime(this.search,this.page).subscribe(data =>{
        this.animeList = data.data;
        this.sortList();
      });
    }

    setTimeout(()=>{
    this.isLoading = false;
    }, 3000);
  }
  
  public redirectToDetailPage(id:number){
    location.href = `/${REPOSITORY_NAME}/anime/detail/${id}`;
  }

  private sortList() {
    this.animeList.sort((a,b) => b.score - a.score);
  }

}
