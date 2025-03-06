import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
bloc_2_2 = input<any>({});

  contactForm!: FormGroup;
  fileName = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
      file: [null],
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.contactForm.patchValue({ file });
      this.fileName = file.name;
    } else {
      this.fileName = 'Invalid file type';
    }
  }

  clearForm() {
    this.contactForm.reset();
    this.fileName = '';
  }

  submitForm() {
    console.log('Form submitted:', this.contactForm.value);
  }
}

