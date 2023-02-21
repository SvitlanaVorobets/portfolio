import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http : HttpClient) { }

  onSubmit(formData: FormGroup) {
    if (formData.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mjvdwolz',
        { name: formData.value.name, replyto: formData.value.email, message: formData.value.body },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}
