import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { MusicWidget } from '../music-widget/music-widget';
import { ProfilePic } from '../profile-pic/profile-pic';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AboutMe, MusicWidget, ProfilePic, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
