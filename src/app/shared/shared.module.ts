import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./components";
import { SharedMaterialModule } from "./shared-material.module";

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [HeaderComponent],
  exports: [CommonModule, HeaderComponent, SharedMaterialModule]
})
export class SharedModule {}
