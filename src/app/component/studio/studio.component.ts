import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/about2.png',
    thumbImage: 'assets/about2.png',
    alt: 'Reformer',
    title: 'title of image'
}, {
    image: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
    thumbImage: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
    title: 'Chair', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  thumbImage: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  thumbImage: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  thumbImage: 'assets/e8bcpawpsnnjhdwbii8d.jpg', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  thumbImage: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  thumbImage: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  thumbImage: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  thumbImage: 'assets/Studio+Pilates+Richmond.png', // Support base64 image
  title: 'Chair', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},

];

  constructor() { }

  ngOnInit(): void {
  }


}
