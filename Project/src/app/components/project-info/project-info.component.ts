import { Component, OnInit } from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  diagrams = [
    {
      'path': 'assets/images/architecture.png',
      'name': 'Architecture'
    },
    {
      'path': 'assets/images/use_case_diagram.png',
      'name': 'Use Case Diagram'
    },
    {
      'path': 'assets/images/sequence_diagram.png',
      'name': 'Sequence Diagram'
    }];

  showingDiagrams: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDiagrams() {
    console.log(this.showingDiagrams)
    this.showingDiagrams = !this.showingDiagrams;
  }
}
