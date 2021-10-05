import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  url: string = '' ;


  ngOnInit(): void {
  }

  goToUrl() {
    this.url = `https://www.mindbodyonline.com/explore/locations/vida-pilates`
    return window.location.href = this.url 
    window.scroll(0,0);

}

}
