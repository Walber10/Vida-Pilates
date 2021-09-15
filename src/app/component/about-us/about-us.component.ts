import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  carro: number = 0

  constructor() { }

  ngOnInit(): void {
    this.carro

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
