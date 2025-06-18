import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="container my-5">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>`
  
})
export class AppComponent {
  title = 'dev-portfolio';
}

bootstrapApplication(AppComponent);