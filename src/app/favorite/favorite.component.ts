import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

// import { EventEmitter } from 'events';

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  // @Input() isSelected: boolean;
  @Input("isFavorite") isFavorite2: boolean;
  @Input("isFavorite") isSelected: boolean;
  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onClick() {
    console.log("isFavorite1", this.isSelected);
    this.isSelected = !this.isSelected;
  }
  onClick2() {
    console.log("isFavorite2", this.isFavorite2);
    this.isFavorite2 = !this.isFavorite2;
  }
}
