import { Component, OnInit } from '@angular/core';

//import the service
import { PicturesService } from "../pictures.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  
})
export class GalleryComponent implements OnInit {
  //add some properties
  pictures : any[]= [];
  image : String = "coffee";
  picturesArray : any[] = [];
  message :String ="";


  //inject the service
  constructor(private picturesService: PicturesService){}
   

     //use the service functions
     getPictures(e){
       e.preventDefault();
      let param;
      if(this.image ==""){
        this.message ="Nothing, you are just clicking search because you like to click things, dont you?";
      }
      else{
        param = this.image;
        this.message="";
        this.picturesService.getPictures(param).subscribe((picture)=>{
            //create an array to store the response for now
            this.picturesArray =  picture["images"];
          
            if(this.pictures.length > 0){
                //remove all the pictures from the last search
                this.pictures = [];
                //lets loop through the array
                this.picturesArray.forEach(pic => {
                //lets refill the pictures property
                //with the new searched data
                this.pictures.push(pic);
                
                }); 
                
            }else{
                
                //lets loop through that array
                this.picturesArray.forEach(pic => {
                //lets push each pic into the pictures property
                this.pictures.push(pic);
                
                }); 

            }  
           

        });
    
      }
  }

  
  ngOnInit() {
   
  }

}
