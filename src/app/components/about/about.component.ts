import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports:[ResumeComponent],
  templateUrl:'./about.component.html',
})
export class AboutComponent {}