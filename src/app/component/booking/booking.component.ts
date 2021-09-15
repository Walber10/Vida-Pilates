import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  message: string = ''
  url: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  sendWhatsapp() {
    let messages = this.message
    this.url = `https://wa.me/610448222438/?text=${messages}`
      
    return window.location.href = this.url 
  }

}
