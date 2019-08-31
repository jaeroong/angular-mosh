import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-fav",
  templateUrl: "./fav.component.html",
  styleUrls: ["./fav.component.css"]
})
export class FavComponent implements OnInit {
  @Input("title") title: string;
  @Input("isFavorite") isFavorite: boolean;
  // @Input("is-favorite") isFavorite2: boolean;
  @Input("is-favorite") isFavorite2: boolean;
  @Input("isFavorite") isSelected: boolean;
  @Output("change") click = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onClick() {
    console.log("isfavorite1", this.isFavorite);
    console.log("isfavorite2", this.isFavorite2);
    console.log("isSelected", this.isSelected);
    this.isFavorite = !this.isFavorite;
    this.isFavorite2 = !this.isFavorite2;
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
    this.click.emit(event);
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
