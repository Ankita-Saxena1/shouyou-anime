import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindowStateService {
  minimized = localStorage.getItem('minimized') === 'true';

  minimize() {
    this.minimized = true;
    localStorage.setItem('minimized', 'true');
  }

  maximize() {
    this.minimized = false;
    localStorage.setItem('minimized', 'false');
  }
}