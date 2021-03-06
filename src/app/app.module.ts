import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CategoriesModule } from "./pages/categories/categories.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CategoriesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
