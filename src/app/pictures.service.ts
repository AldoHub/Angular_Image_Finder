import { Injectable } from '@angular/core';
//import the HttpClient module
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PicturesService {

  constructor(private httpClient: HttpClient) { }

  //function to fetch the data from Splashbase
  getPictures(param : String){

   //return the promise from HttpClient
   return this.httpClient.get("http://www.splashbase.co/api/v1/images/search?query=" + param);
  }


}
