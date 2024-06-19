import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);
  mailTest = false;
  

  formData: any = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  post = {
    endPoint: 'https://wladimir-wagner.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            setTimeout(() => {
              ngForm.resetForm();
            }, 1500);
            
          },
          error: (error) => {
            console.error(error);
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
    }
  }
}
