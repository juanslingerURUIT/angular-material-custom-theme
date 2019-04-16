import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';
import { InputComponent } from './input/input.component';
import { SharedModule } from './shared/shared.module';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    GridComponent,
    InputComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
