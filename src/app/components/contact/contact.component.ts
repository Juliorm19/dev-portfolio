import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = '';
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  // convenience getter for easy access to form fiqs  elds
  get f() { return this.contactForm.controls; }
  
  onSubmit(): void {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}