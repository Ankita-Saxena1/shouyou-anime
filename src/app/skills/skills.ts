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
        { img: '/java.png', title: 'Java', desc: 'ES6+' },
        { img: '/js.png', title: 'Javascript', desc: 'Strong typing' },
        { img: '/typescript.png', title: 'Typescript', desc: 'Strong typing' },
        { img: '/python.jpeg', title: 'Python', desc: 'Strong typing' },
      ]
    },
    {
      name: 'Tools',
      items: [
        { img: '/camunda.png', title: 'Camunda', desc: 'Version control' },
        { img: '/flowable.png', title: 'Flowable', desc: 'Version control' },
        { img: '/ibmbpm.png', title: 'IBM/BPM', desc: 'Version control' },
        { img: '/git.png', title: 'Git', desc: 'Version control' },
      ]
    },
    {
      name: 'DevTools',
      items: [
        { img: '/openshift.png', title: 'Openshift', desc: 'Version control' },
        { img: '/kubernetes.png', title: 'Kubernetes', desc: 'Version control' },
        { img: '/docker.png', title: 'Docker', desc: 'Version control' },
      ]
    },
    {
      name: 'Frameworks',
      items: [
        { img: '/.png', title: 'BPMN 2.0', desc: 'Version control' },
        { img: '/angular.png', title: 'Angular', desc: 'Version control' },
        { img: '/git.png', title: 'Spring Boot', desc: 'Version control' },
      ]
    },
    {
      name: 'Testing',
      items: [
        { img: '/git.png', title: 'Manual', desc: 'Version control' },
        { img: '/selenium.png', title: 'Selenium', desc: 'Version control' },
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
