import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { GuitarListModule } from "./guitar-list/guitar-list.module";

@NgModule({
  imports: [GuitarListModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
