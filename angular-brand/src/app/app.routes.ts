import { Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { StoryComponent } from './components/story/story.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: BrandComponent },
  { path: 'story', component: StoryComponent },
  { path: 'contact', component: ContactComponent }
];
