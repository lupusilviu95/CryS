import { Component, OnInit } from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  links = [
    {
      'url': 'project-info/scholarly-html',
      'name': 'Scholarly Html Report',
      'icon': 'large text file icon'
    },
    {
      'url': 'https://app.swaggerhub.com/apis/CryS/CryS_REST_API/1.0.0',
      'name': 'Open API Reference',
      'icon': 'large code icon'
    }
  ];
  diagrams = [
    {
      'path': 'assets/scholarly-html/images/general_architecture.svg',
      'name': 'Architecture'
    },
    {
      'path': 'assets/images/use_case_diagram.svg',
      'name': 'Use Case Diagram'
    },
    {
      'path': 'assets/images/sequence_diagram.png',
      'name': 'Sequence Diagram'
    }];

  showingDiagrams: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleDiagrams() {
    console.log(this.showingDiagrams);
    this.showingDiagrams = !this.showingDiagrams;
  }

  navigate(path) {
    console.log(`navigate(${path})`);
    this.router.navigate(path);
  }
}
