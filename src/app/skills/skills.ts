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
        { img: '/java.png', title: 'Java', desc: 'Java 7, 8, 11' },
        { img: '/js.png', title: 'Javascript', desc: '' },
        { img: '/typescript.png', title: 'Typescript', desc: '' },
        { img: '/python.jpeg', title: 'Python', desc: '' },
      ]
    },
    {
      name: 'Tools',
      items: [
        { img: '/camunda.png', title: 'Camunda', desc: '' },
        { img: '/flowable.png', title: 'Flowable', desc: '' },
        { img: '/ibmbpm.png', title: 'IBM/BPM', desc: '' },
        { img: '/git.png', title: 'Git', desc: '' },
      ]
    },
    {
      name: 'DevTools',
      items: [
        { img: '/openshift.png', title: 'Openshift', desc: '' },
        { img: '/kubernetes.png', title: 'Kubernetes', desc: '' },
        { img: '/docker.png', title: 'Docker', desc: '' },
      ]
    },
    {
      name: 'Frameworks',
      items: [
        { img: '/.png', title: 'BPMN 2.0', desc: '' },
        { img: '/angular.png', title: 'Angular', desc: '' },
        { img: '/git.png', title: 'Spring Boot', desc: '' },
      ]
    },
    {
      name: 'Testing',
      items: [
        { img: '/git.png', title: 'Manual', desc: '' },
        { img: '/selenium.png', title: 'Selenium', desc: '' },
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
