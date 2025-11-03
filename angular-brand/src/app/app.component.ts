import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h1>🍨 Sunny Scoop</h1>
        </div>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Brand</a>
          <a routerLink="/story" routerLinkActive="active">Our Story</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
          <a href="../index.html" class="external-link">← Back to Main Site</a>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="container">
        <p>© 2025 Sunny Scoop - Made with Angular 17+ for Advanced Web Technology</p>
      </div>
    </footer>
  `,
  styles: [`
    .navbar {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 1rem 0;
      margin-bottom: 2rem;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand h1 {
      font-size: 1.5rem;
      color: var(--primary-color);
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }

    .nav-links a:hover {
      color: var(--primary-color);
      background: rgba(255, 107, 107, 0.1);
    }

    .nav-links a.active {
      color: var(--primary-color);
      background: rgba(255, 107, 107, 0.15);
    }

    .nav-links .external-link {
      color: #666;
      font-size: 0.9rem;
    }

    .main-content {
      min-height: calc(100vh - 200px);
      padding: 2rem 0;
    }

    .footer {
      background: white;
      padding: 2rem 0;
      margin-top: 3rem;
      border-top: 1px solid #eee;
      text-align: center;
      color: #666;
    }
  `]
})
export class AppComponent {
  title = 'Sunny Scoop - Brand';
}
