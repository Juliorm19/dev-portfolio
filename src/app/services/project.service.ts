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
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['Angular', 'Firebase', 'Bootstrap'],
      imageUrl: 'assets/images/projects/taskapp.jpg',
      demoUrl: 'https://task-app.example.com',
      githubUrl: 'https://github.com/johndoe/taskapp',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard with location search and forecasts.',
      technologies: ['Angular', 'OpenWeather API', 'Chart.js'],
      imageUrl: 'assets/images/projects/weather.jpg',
      demoUrl: 'https://weather-dash.example.com',
      githubUrl: 'https://github.com/johndoe/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills.',
      technologies: ['Angular', 'Bootstrap', 'SCSS'],
      imageUrl: 'assets/images/projects/portfolio.jpg',
      demoUrl: 'https://johndoe-portfolio.example.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'An application to track workouts, nutrition, and fitness progress.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
      imageUrl: 'assets/images/projects/fitness.jpg',
      githubUrl: 'https://github.com/johndoe/fitness-tracker',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts.',
      technologies: ['Angular', 'Firebase', 'Markdown'],
      imageUrl: 'assets/images/projects/blog.jpg',
      demoUrl: 'https://blog-platform.example.com',
      githubUrl: 'https://github.com/johndoe/blog-platform',
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