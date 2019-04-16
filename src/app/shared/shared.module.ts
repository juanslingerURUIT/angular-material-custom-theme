import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { HeaderComponent } from "./components";
import { CommentService } from './services';
import { SharedMaterialModule } from "./shared-material.module";

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [HeaderComponent],
  exports: [CommonModule, HeaderComponent, SharedMaterialModule],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ CommentService ]
    }
  }
}
