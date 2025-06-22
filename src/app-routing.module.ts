import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMe } from './app/about-me/about-me';
import { MyProjects } from './app/my-projects/my-projects';
import { ContactMe } from './app/contact-me/contact-me';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMe },
  { path: 'my-projects', component: MyProjects },
  { path: 'contact-me', component: ContactMe },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }