import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url: string

  goToUrl() {
    this.url = `https://www.mindbodyonline.com/explore/locations/vida-pilates`
      
    return window.location.href = this.url 
}

}
