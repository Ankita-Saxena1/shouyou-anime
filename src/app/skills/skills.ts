import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class Skills {
  folders = [
    {
      name: 'Languages',
      items: [
        { img: '/assets/js.png', title: 'Java', desc: 'ES6+' },
        { img: '/assets/ts.png', title: 'Javascript', desc: 'Strong typing' },
        { img: '/assets/ts.png', title: 'Typescript', desc: 'Strong typing' },
        { img: '/assets/ts.png', title: 'Python', desc: 'Strong typing' },
      ]
    },
    {
      name: 'Tools',
      items: [
        { img: '/assets/git.png', title: 'Camunda', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Flowable', desc: 'Version control' },
        { img: '/assets/git.png', title: 'IBM/BPM', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
      ]
    },
    {
      name: 'DevTools',
      items: [
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
      ]
    },
    {
      name: 'Frameworks',
      items: [
        { img: '/assets/git.png', title: 'BPMN 2.0', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
      ]
    },
    {
      name: 'Testing',
      items: [
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
        { img: '/assets/git.png', title: 'Git', desc: 'Version control' },
      ]
    },
  ];
  activePopup: number | null = null;

  openPopup(index: number) {
    this.activePopup = index;
  }

  closePopup() {
    this.activePopup = null;
  }
}
