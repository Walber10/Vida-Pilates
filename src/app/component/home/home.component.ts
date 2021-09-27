import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carro: number = 0
  url: string = ''

  constructor() { }

  ngOnInit(): void {
    // this.myFunction()
    this.carro

    this.onNext();//Initialisation
    setInterval(() => this.onNext(), 3000);

  }

  goToUrl() {
    this.url = `https://www.mindbodyonline.com/explore/locations/vida-pilates`
      
    return window.location.href = this.url 
}

  onPrevious() {
    let reset: number = 2
    if(this.carro <= 0) {
      this.carro = reset
    } else {
      this.carro --
    }
    console.log(this.carro)
  }

  onNext() {
    let reset: number = 0
    if(this.carro >= 2) {
      this.carro = reset
    } else {
      this.carro ++ 
    }
    console.log(this.carro)
  }


}
