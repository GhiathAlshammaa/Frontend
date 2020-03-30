import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
