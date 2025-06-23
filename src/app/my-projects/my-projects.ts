import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.css',
  standalone: true,
})
export class MyProjects {
  projects = [
    {
      title: 'dRisk',
      description:
        'A monitoring platform used by relationship managers and credit specialists in the bank.',
      imagesUrl: [
        'https://example.com/images/drisk1.jpg'
        ]
    },
    {
      title: 'CISCO',
      description:
        'Network Workflows designed for provisioning of network devices.',
      imagesUrl: [
        'https://example.com/images/drisk1.jpg'
        ]
    },
    // Add more projects as needed
  ];
  currentIndex = 0;

  prevProject() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
