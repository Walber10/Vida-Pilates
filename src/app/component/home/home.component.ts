import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carro: number = 0

  constructor() { }

  ngOnInit(): void {
    // this.myFunction()
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
