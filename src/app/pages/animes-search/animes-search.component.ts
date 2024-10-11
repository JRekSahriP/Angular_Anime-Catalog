import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REPOSITORY_NAME } from '../commons/constants/constants';

@Component({
  selector: 'app-animes-search',
  templateUrl: './animes-search.component.html',
  styleUrls: ['./animes-search.component.css']
})
export class AnimesSearchComponent {
  constructor(private route: ActivatedRoute) { }

  inputPage:number;
  currentPage:number;
  searchText:string;


ngOnInit():void {
  this.getCurrentPage();
  this.getSearchText();
} 

public prevPage():void {
  location.href = this.getURL(this.currentPage-1);
}
public goToPage():void {
  location.href = this.getURL(this.inputPage);
}
public nextPage():void {
  location.href = this.getURL(this.currentPage+1);
}


public search():void {
  location.href = this.getURL(1);
}


private getCurrentPage():void {
  this.route.params.subscribe(params => {
    this.currentPage = +params["page"];
  });
  if(!this.currentPage){
    this.currentPage = 1;
  }
  if(this.currentPage < 1){
    this.currentPage = 1;
  }
}


private getSearchText():void {
  this.route.queryParams.subscribe(params => {
    this.searchText = params["search"] || "";
  });
}

private getURL(page:number = 1):string {
  return `/${REPOSITORY_NAME}/anime/search/${page}?search=${encodeURIComponent(this.searchText)}`;
}


}