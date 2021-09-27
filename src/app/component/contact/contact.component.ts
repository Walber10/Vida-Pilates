import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

// onSubmit(name: any, email: any, comment: any) {
//   this.emailService.sendEmail({
//     from: 'Mailgun Sandbox <info@vidapilates.com.au>',
//     to: email,
//     name: name,
//     text: comment,
//   })
// }
  


}
