import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) { 

  }

  ngOnInit() {
this._initForm()
    
  }

  _initForm(){
    this.contactForm = this.fb.group({
      name: [""],
      email: [""],
      subject: [""],
      Comment: [""]
    })
  }

  onSubmit(){
    const email = 'https://formspree.io/f/xdoybqrn'
    this.contactForm.value
    this.http.post(email, this.contactForm.value ).subscribe((resp)=>{
      console.log(resp)
    })
  }


  
}
