import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
    template: `
      <section class="row align-items-center min-vh-80">
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold">Julio Rosario</h1>
          <h2 class="fs-3 text-primary mb-4">AI / Full Stack Developer Jr</h2>
          <p class="lead mb-4">Building modern web applications with Angular, Node.js and more.</p>
          <div class="d-flex gap-3">
            <a routerLink="/projects" class="btn btn-primary btn-lg">View My Work</a>
            <a routerLink="/contact" class="btn btn-outline-secondary btn-lg">Get In Touch</a>
          </div>
          <div class="d-flex gap-3 mt-4">
            <a href="https://github.com/juliorm19" target="_blank" class="text-dark fs-4">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/julio-c-rosario" target="_blank" class="text-dark fs-4">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" class="text-dark fs-4">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <img src="assets/images/developer.svg" alt="Developer illustration" class="img-fluid">
        </div>
      </section>
    `
  })
  export class HomeComponent {}
