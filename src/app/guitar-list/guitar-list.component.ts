import { Component, Input } from "@angular/core";
import { GuitarCollection } from "../data/guitar-collection.model";

@Component({
  selector: "app-guitar-list",
  templateUrl: "./guitar-list.component.html",
  styleUrls: ["./guitar-list.component.scss"]
})
export class GuitarListComponent {
  @Input()
  guitarCollection: GuitarCollection[];

  constructor() {}
}
