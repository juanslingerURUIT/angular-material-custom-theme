import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ButtonComponent } from "./button/button.component";
import { InputComponent } from "./input/input.component";
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  {
    path: "buttons",
    component: ButtonComponent
  },
  {
    path: "inputs",
    component: InputComponent
  },
  {
    path: "tabs",
    component: TabComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "buttons"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
