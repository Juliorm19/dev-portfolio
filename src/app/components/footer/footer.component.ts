import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[RouterLink],
  template: `
    <footer class="bg-dark text-white py-5 mt-5 " >
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h4 class="h5 mb-3">Julio Rosario</h4>
            <p class="mb-1">Full Stack Developer Jr</p>
            <p class="mb-0">Santo Domingo, RD</p>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <h4 class="h5 mb-3">Connect</h4>
            <div class="d-flex gap-3">
              <a href="https://github.com/juliorm19" target="_blank" class="text-white fs-5">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/julio-c-rosario" target="_blank" class="text-white fs-5">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="mailto:info@jrcores.com" class="text-white fs-5">
                <i class="bi bi-envelope"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <h4 class="h5 mb-3">Quick Links</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a routerLink="/" class="text-white text-decoration-none">Home</a>
              </li>
              <li class="mb-2">
                <a routerLink="/about" class="text-white text-decoration-none">About</a>
              </li>
              <li class="mb-2">
                <a routerLink="/projects" class="text-white text-decoration-none">Projects</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
          <p class="mb-0">&copy; {{ currentYear }} Julio Rosario. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
