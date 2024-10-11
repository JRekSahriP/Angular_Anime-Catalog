import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent {
  constructor() { }

  @Input() id:number;
  @Input() name:string;
  @Input() imageURL:string;
  @Input() score: number;

}
