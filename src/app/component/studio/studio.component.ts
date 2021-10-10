import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/studio/IMG_8964.jpg',
    thumbImage: 'assets/studio/IMG_8964.jpg',
    alt: 'Reformer',
    //title: 'title of image'
}, {
    image: 'assets/studio/IMG_8978.jpg', // Support base64 image
    thumbImage: 'assets/studio/IMG_8978.jpg', // Support base64 image
    //title: 'Chair', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_8985.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_8985.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_8987.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_8987.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9000.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9000.jpg', // Support base64 image
  //title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9078.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9078.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9083.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9083.jpg', // Support base64 image
  //title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9125.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9125.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9147.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9147.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/studio/IMG_9197.jpg', // Support base64 image
  thumbImage: 'assets/studio/IMG_9197.jpg', // Support base64 image
 // title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},

];

  constructor() { }

  ngOnInit(): void {
  }


}
