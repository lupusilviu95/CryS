import { Component, OnInit } from '@angular/core';
import {ProjectInfoComponent} from "../project-info.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  openApiLink = ProjectInfoComponent.openApiDocumentationLink;
  gitHubPagesLink = ProjectInfoComponent.gitHubPagesLink;
  constructor() { }

  ngOnInit() {
  }

}
