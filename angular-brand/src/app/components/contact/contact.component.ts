import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h2>Visit Us</h2>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <strong>Address</strong>
              <p>123 Sweet Street<br>Downtown, CA 90210</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div>
              <strong>Email</strong>
              <p>hello@sunnyscoop.example</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div>
              <strong>Hours</strong>
              <p>Mon-Fri: 10am - 9pm<br>Sat-Sun: 11am - 10pm</p>
            </div>
          </div>

          <div class="social-links">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">📷</a>
              <a href="#" class="social-icon">🐦</a>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <h2>Send Us a Message</h2>
          @if (submitted) {
            <div class="success-message">
              <div class="success-icon">✅</div>
              <h3>Thank you, {{ formData.name }}!</h3>
              <p>We've received your message and will get back to you soon.</p>
              <button class="btn" (click)="resetForm()">Send Another Message</button>
            </div>
          } @else {
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name" 
                  required
                  #name="ngModel"
                  class="form-control"
                />
                @if (name.invalid && name.touched) {
                  <div class="error">Name is required</div>
                }
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email" 
                  required
                  email
                  #email="ngModel"
                  class="form-control"
                />
                @if (email.invalid && email.touched) {
                  <div class="error">Valid email is required</div>
                }
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message" 
                  required
                  #message="ngModel"
                  rows="5"
                  class="form-control"
                ></textarea>
                @if (message.invalid && message.touched) {
                  <div class="error">Message is required</div>
                }
              </div>

              <button 
                type="submit" 
                class="btn btn-submit"
                [disabled]="contactForm.invalid"
              >
                Send Message
              </button>
            </form>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-header {
      text-align: center;
      padding: 2rem 0;
      margin-bottom: 3rem;
    }

    .contact-header h1 {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .contact-header p {
      font-size: 1.2rem;
      color: #666;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .contact-info h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      align-items: flex-start;
    }

    .info-icon {
      font-size: 2rem;
    }

    .info-item strong {
      display: block;
      color: #333;
      margin-bottom: 0.3rem;
    }

    .info-item p {
      color: #666;
      margin: 0;
      line-height: 1.6;
    }

    .social-links {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
    }

    .social-links h3 {
      color: #333;
      margin-bottom: 1rem;
    }

    .social-icons {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      font-size: 2rem;
      text-decoration: none;
      transition: transform 0.3s;
    }

    .social-icon:hover {
      transform: scale(1.2);
    }

    .contact-form-container {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .contact-form-container h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .error {
      color: #dc3545;
      font-size: 0.9rem;
      margin-top: 0.3rem;
    }

    .btn-submit {
      width: 100%;
      padding: 15px;
      font-size: 1.1rem;
      margin-top: 1rem;
    }

    .btn-submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .success-message {
      text-align: center;
      padding: 2rem;
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .success-message h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .success-message p {
      color: #666;
      margin-bottom: 2rem;
    }
  `]
})
export class ContactComponent {
  submitted = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
