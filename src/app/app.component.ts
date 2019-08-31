import { Component } from "@angular/core";
import { FavoriteChangedEventArgs } from "./fav/fav.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = 'hello-world';

  post = {
    title: "Title str",
    isFavorite: true
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("onFavoriteChanged", eventArgs);
  }
}
