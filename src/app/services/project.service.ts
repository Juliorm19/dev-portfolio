import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1, /* ready */
      title: 'Quiz App',
      description: 'A Simple Quiz App to create and use quizzes saving the quizzes on LocalStorage.',
      technologies: ['Angular', 'Bootstrap', 'SCSS', 'TypeScript'],
      imageUrl: 'assets/images/quizAsset.png',
      demoUrl: 'https://quizzes-liard.vercel.app/',
      githubUrl: 'https://github.com/Juliorm19/quizzes',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard with location search and forecasts.',
      technologies: ['Angular', 'OpenWeather API', 'Chart.js'],
      imageUrl: 'assets/images/weather.png',
      demoUrl: 'https://weahterapiapp.vercel.app/',
      githubUrl: 'https://github.com/Juliorm19/weahterapiapp',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills.',
      technologies: ['Angular', 'Bootstrap', 'SCSS'],
      imageUrl: 'assets/images/portfolio.png',
      demoUrl: 'https://www.jrcores.com/',
      githubUrl: 'https://github.com/Juliorm19/dev-portfolio',
      featured: false
    }
  ];

  getAllProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}