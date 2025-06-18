import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgFor, NgIf],
  standalone: true,
  template: `
    <div class="card h-100">
      <img [src]="project.imageUrl" class="card-img-top" [alt]="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <div class="mb-3">
          <span *ngFor="let tech of project.technologies" class="badge bg-secondary me-1 mb-1">{{ tech }}</span>
        </div>
      </div>
      <div class="card-footer bg-white border-top-0">
        <div class="d-flex gap-2">
          <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" class="btn btn-primary btn-sm">
            <i class="bi bi-play-fill"></i> Live Demo
          </a>
          <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="btn btn-outline-dark btn-sm">
            <i class="bi bi-github"></i> Code
          </a>
        </div>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() project!: Project;
}