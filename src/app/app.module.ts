import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [],
  imports: [
    Injectable,
    AppComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'contact', component: ContactComponent },
        { path: '**', redirectTo: '' }
    ]),
    FooterComponent,
    HeaderComponent
],
  providers: [],
  bootstrap: []
})
export class AppModule { }