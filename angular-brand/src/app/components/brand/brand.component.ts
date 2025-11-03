import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Flavor {
  name: string;
  description: string;
  price: number;
  emoji: string;
}

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="hero">
        <h1>About Sunny Scoop</h1>
        <p class="tagline">{{ tagline }}</p>
      </div>

      <section class="about-section">
        <h2>Who We Are</h2>
        <p>{{ description }}</p>
      </section>

      <section class="flavors-section">
        <h2>Our Signature Flavors</h2>
        <div class="filter-box">
          <input 
            type="text" 
            [(ngModel)]="searchTerm" 
            placeholder="Search flavors..." 
            class="search-input"
          />
          <span class="filter-count">Showing {{ filteredFlavors().length }} of {{ flavors.length }}</span>
        </div>

        <div class="flavors-grid">
          @for (flavor of filteredFlavors(); track flavor.name) {
            <div class="flavor-card">
              <div class="flavor-emoji">{{ flavor.emoji }}</div>
              <h3>{{ flavor.name }}</h3>
              <p>{{ flavor.description }}</p>
              <div class="price">{{ flavor.price | currency }}</div>
            </div>
          }
        </div>
      </section>

      <section class="values-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          @for (value of values; track value.title) {
            <div class="value-card">
              <div class="value-icon">{{ value.icon }}</div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 3rem 0;
      background: linear-gradient(135deg, #fff7f0 0%, #ffe4e1 100%);
      border-radius: 15px;
      margin-bottom: 3rem;
    }

    .hero h1 {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .tagline {
      font-size: 1.3rem;
      color: #666;
    }

    .about-section, .flavors-section, .values-section {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .about-section p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
    }

    .filter-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .search-input {
      padding: 12px 20px;
      border: 2px solid #ddd;
      border-radius: 25px;
      font-size: 1rem;
      width: 300px;
      transition: border-color 0.3s;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .filter-count {
      color: #666;
      font-size: 0.9rem;
    }

    .flavors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }

    .flavor-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .flavor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .flavor-emoji {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .flavor-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .flavor-card p {
      color: #666;
      margin-bottom: 1rem;
    }

    .price {
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .value-card h3 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .value-card p {
      color: #666;
      line-height: 1.6;
    }
  `]
})
export class BrandComponent {
  tagline = 'Small-batch ice cream with big, natural flavors';
  description = 'Sunny Scoop is a small-batch ice cream brand focused on bright, natural flavors and sustainable sourcing. We believe in using the finest local ingredients and traditional methods to create ice cream that brings joy to every scoop.';
  searchTerm = '';

  flavors: Flavor[] = [
    { name: 'Strawberry Dream', description: 'Hand-picked berries with fresh cream', price: 3.5, emoji: '🍓' },
    { name: 'Chocolate Bliss', description: 'Single-origin dark chocolate delight', price: 3.75, emoji: '🍫' },
    { name: 'Lemon Zest', description: 'Tangy and refreshing sorbet', price: 3.25, emoji: '🍋' },
    { name: 'Coconut Chill', description: 'Tropical coconut with toasted flakes', price: 3.5, emoji: '🥥' },
    { name: 'Cookie Crunch', description: 'Vanilla loaded with cookie bits', price: 3.8, emoji: '🍪' },
    { name: 'Classic Vanilla', description: 'Madagascar vanilla bean perfection', price: 3.0, emoji: '🍦' },
    { name: 'Mint Chocolate Chip', description: 'Fresh mint with dark chocolate', price: 3.6, emoji: '🌿' },
    { name: 'Caramel Swirl', description: 'Buttery caramel ribbons', price: 3.7, emoji: '🍯' }
  ];

  values = [
    { icon: '🌱', title: 'Sustainable', description: 'We source ingredients locally and prioritize eco-friendly practices in everything we do.' },
    { icon: '❤️', title: 'Quality First', description: 'Every batch is made with care using only the finest natural ingredients.' },
    { icon: '👨‍👩‍👧', title: 'Community', description: 'We\'re proud to be part of the neighborhood and support local farmers.' }
  ];

  filteredFlavors(): Flavor[] {
    if (!this.searchTerm) return this.flavors;
    
    const term = this.searchTerm.toLowerCase();
    return this.flavors.filter(f => 
      f.name.toLowerCase().includes(term) || 
      f.description.toLowerCase().includes(term)
    );
  }
}
