import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ResumeComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {}