import { Component, VERSION } from "@angular/core";
import { fullGuitarCollection } from "./data/guitar-collection.mock";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly guitarCollectionMock = fullGuitarCollection;
}
