import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WindowStateService } from '../../services/window-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class Navbar {
  constructor(public windowState: WindowStateService) {}

  minimize() {
    this.windowState.minimize();
  }

  maximize() {
    this.windowState.maximize();
  }
}
