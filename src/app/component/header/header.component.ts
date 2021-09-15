import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  responsive = ''
  toggles = ''
  togleNav: boolean = true

  constructor() { }

  ngOnInit(): void {
    console.log(this.togleNav)
  }

  addMobile() {
    this.togleNav = !this.togleNav
    
    if(this.responsive == 'responsive') {
      this.responsive = '' 
      this.toggles = ''
    } else {
      this.responsive = 'responsive'
      this.toggles = 'togleNav'
    }
console.log(this.togleNav)
    
  }

}
