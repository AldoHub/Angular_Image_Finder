import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import the forms module
import { FormsModule } from '@angular/forms';

//import the HttpClient module
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

//import the service
import {PicturesService} from "./pictures.service";
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PicturesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
