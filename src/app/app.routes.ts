import { AboutMe } from './about-me/about-me';
import { MyProjects } from './my-projects/my-projects';
import { ContactMe } from './contact-me/contact-me';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { App } from './app';
import { Blogs } from './blogs/blogs';

export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'about-me', component: AboutMe },
  { path: 'my-projects', component: MyProjects },
  { path: 'contact-me', component: ContactMe },
  { path: 'blogs', component: Blogs },
];
