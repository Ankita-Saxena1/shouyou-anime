import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatStalk } from './animations/cat-stalk/cat-stalk';
import { Navbar } from './navbar/navbar';
import { AboutMe } from './about-me/about-me';
import { ContactMe } from './contact-me/contact-me';
import { MusicWidget } from './music-widget/music-widget';
import { ProfilePic } from './profile-pic/profile-pic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AboutMe, MusicWidget, ProfilePic],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showStalk = false;
  redCursor = false;

  showStalkAnimation() {
    this.redCursor = !this.redCursor;
    this.showStalk = true;
    // Optionally, hide after some time:
    // setTimeout(() => this.showStalk = false, 3000);
  }
}
