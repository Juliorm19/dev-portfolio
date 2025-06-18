import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  template: `
    <section>
      <h2 class="display-5 fw-bold mb-4">My Projects</h2>
      <p class="lead mb-5">Here are some of the projects I've worked on. Each one represents different challenges and solutions.</p>
      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" *ngFor="let project of projects">
          <app-project-card [project]="project"></app-project-card>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projectService: ProjectService) {}
  
  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
  }
}
