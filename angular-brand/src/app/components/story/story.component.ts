import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="story-header">
        <h1>Our Story</h1>
      </div>

      <div class="timeline">
        @for (milestone of milestones; track milestone.year) {
          <div class="timeline-item">
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content">
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        }
      </div>

      <section class="mission-section">
        <h2>Our Mission</h2>
        <p class="mission-text">{{ mission }}</p>
      </section>

      <section class="team-section">
        <h2>Meet the Team</h2>
        <div class="team-grid">
          @for (member of team; track member.name) {
            <div class="team-card">
              <div class="team-avatar">{{ member.avatar }}</div>
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
              <p>{{ member.bio }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .story-header {
      text-align: center;
      padding: 2rem 0;
      margin-bottom: 3rem;
    }

    .story-header h1 {
      font-size: 3rem;
      color: var(--primary-color);
    }

    .timeline {
      max-width: 800px;
      margin: 0 auto 4rem;
      padding-left: 2rem;
      border-left: 3px solid var(--primary-color);
    }

    .timeline-item {
      margin-bottom: 3rem;
      position: relative;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2.6rem;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary-color);
      border: 4px solid var(--bg-light);
    }

    .timeline-year {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .timeline-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .timeline-content p {
      color: #666;
      line-height: 1.6;
    }

    .mission-section {
      background: white;
      padding: 3rem;
      border-radius: 15px;
      margin-bottom: 3rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .mission-section h2 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .mission-text {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #555;
      max-width: 800px;
      margin: 0 auto;
    }

    .team-section {
      margin-top: 4rem;
    }

    .team-section h2 {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .team-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .team-card:hover {
      transform: translateY(-5px);
    }

    .team-avatar {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .team-card h3 {
      color: #333;
      margin-bottom: 0.3rem;
    }

    .role {
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .team-card p {
      color: #666;
      line-height: 1.6;
      font-size: 0.95rem;
    }
  `]
})
export class StoryComponent {
  milestones = [
    {
      year: '2016',
      title: 'A Kitchen Experiment',
      description: 'It all started in a tiny apartment kitchen where our founder, Sarah, began experimenting with homemade ice cream recipes using local organic ingredients.'
    },
    {
      year: '2018',
      title: 'First Farmers Market',
      description: 'After two years of perfecting recipes, we debuted at the local farmers market. The response was overwhelming, and we sold out within hours!'
    },
    {
      year: '2020',
      title: 'Opening Our Shop',
      description: 'Despite the challenges of 2020, we opened our first brick-and-mortar store in downtown, becoming a neighborhood favorite.'
    },
    {
      year: '2023',
      title: 'Sustainable Sourcing',
      description: 'We partnered with local organic farms and implemented zero-waste practices, earning recognition as a sustainable business leader.'
    },
    {
      year: '2025',
      title: 'Growing the Dream',
      description: 'Today, we continue to craft small batches with the same care and passion, now serving thousands of happy customers.'
    }
  ];

  mission = 'Our mission is to create delicious, sustainable ice cream that brings people together while supporting our local community and protecting the environment for future generations.';

  team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Head Chef',
      avatar: '👩‍🍳',
      bio: 'Former pastry chef with a passion for natural flavors and sustainability.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Operations Manager',
      avatar: '👨‍💼',
      bio: 'Ensures every scoop meets our high standards and operations run smoothly.'
    },
    {
      name: 'Emma Thompson',
      role: 'Community Liaison',
      avatar: '👩‍🌾',
      bio: 'Connects us with local farmers and manages our sustainability initiatives.'
    }
  ];
}
