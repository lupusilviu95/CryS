import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],

})
export class ProjectInfoComponent implements OnInit {
  static openApiDocumentationLink = 'https://app.swaggerhub.com/apis/CryS/CryS_REST_API/1.0.0';
  static gitHubPagesLink = 'https://wade-crys.github.io/CryS/';

  openApiLink = ProjectInfoComponent.openApiDocumentationLink;
  diagrams = [
    {
      path: 'assets/scholarly-html/images/general_architecture.svg',
      name: 'Architecture'
    },
    {
      path: 'assets/images/use_case_diagram.svg',
      name: 'Use Case Diagram'
    },
    {
      path: 'assets/images/sequence_diagram.svg',
      name: 'Sequence Diagram'
    }];

  showingDiagrams = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDiagrams() {
    this.showingDiagrams = !this.showingDiagrams;
  }
}
