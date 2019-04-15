import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTreeModule
} from "@angular/material";

const Shared_Material = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTreeModule
];

@NgModule({
  imports: Shared_Material,
  exports: Shared_Material
})
export class SharedMaterialModule {}
