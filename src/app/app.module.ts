import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsonSchemaFormModule} from 'angular2-json-schema-form';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonSchemaFormModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
