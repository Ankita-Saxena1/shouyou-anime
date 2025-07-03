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
        '/Credit-Suisse-logo.png'
        ]
    },
    {
      title: 'CISCO',
      description:
        'BPA is a scalable, microservices-based platform with an embedded workflow engine, digital user interface and common integration middleware. BPA cuts across multi-domains by integrating with controllers and is tightly integrated with NSO. ROBOT-BOA(Bank Of America) integrated BPA with Service Catalog to create multiple service platforms to place orders for device and switch configurations based on separate use cases. COX integrated BPA to implement device configurations for CBR8, RPD-SmartPhy, RPA/DPA, HUB & UBR10 network devices comprising device staging, activation, OS upgrade and configuration management.',
      imagesUrl: [
        '/cisco.jpg'
        ]
    },
    {
      title: 'Blue Marble',
      description:
        'Empowers enterprises to kick-start their digitalization journey, with business services built in a micro-services framework and 100 % modern open source technologies.',
      imagesUrl: [
        '/CenturyLink-Logo.png'
        ]
    },
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
