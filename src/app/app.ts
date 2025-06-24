import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { WindowStateService } from '../services/window-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  constructor(public windowState: WindowStateService) {}

  showStalk = false;
  redCursor = false;

  showStalkAnimation() {
    this.redCursor = !this.redCursor;
    this.showStalk = true;
    // Optionally, hide after some time:
    // setTimeout(() => this.showStalk = false, 3000);
  }
}
