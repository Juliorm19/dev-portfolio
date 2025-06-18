import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html' 
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'HTML5/CSS3', level: 4 },
        { name: 'Bootstrap', level: 4 },
        { name: 'SCSS/SASS', level: 3 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'Express', level: 4 },
        { name: 'MongoDB', level: 3 },
        { name: 'RESTful APIs', level: 5 },
        { name: 'Firebase', level: 4 },
        { name: 'SQL', level: 3 }
      ]
    },
    {
      name: 'Tools & Methods',
      skills: [
        { name: 'Git/GitHub', level: 5 },
        { name: 'Docker', level: 3 },
        { name: 'CI/CD', level: 3 },
        { name: 'Agile/Scrum', level: 3 },
        { name: 'Jest/Jasmine', level: 2 }
      ]
    },
    {
      name: 'Other',
      skills: [
        { name: 'Python', level: 4.5 },
        { name: 'UI/UX Design', level: 3 },
        { name: 'Data Analysis', level: 4 },
        { name: 'Artificial Intelligence', level: 2.5 }
      ]
    }
  ];
}