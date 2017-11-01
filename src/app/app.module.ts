import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DivRightComponent } from './div-right/div-right.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects/projects.component';
import { SliderComponent } from './slider/slider.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { HomeComponent } from './home/home.component';
import { ScrollAnimationFooterComponent } from './scroll-animation-footer/scroll-animation-footer.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { AllProjectsViewComponent } from './all-projects-view/all-projects-view.component';

const appRoutes:Routes = [

  {
    path: 'home',
    component:HomeComponent
  }
 ,
  {
    path: 'allprojects',
    component:AllProjectsViewComponent
  }
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    DivRightComponent,
    NavComponent,
    AboutComponent,
    BackgroundComponent,
    ProjectsComponent,
    SliderComponent,
    AllProjectsComponent,
    HomeComponent,
    ScrollAnimationFooterComponent,
    SocialIconsComponent,
    AllProjectsViewComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
