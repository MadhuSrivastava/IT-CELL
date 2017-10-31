import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DivLeftComponent } from './div-left/div-left.component';
import { DivRightComponent } from './div-right/div-right.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects/projects.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    DivLeftComponent,
    DivRightComponent,
    NavComponent,
    AboutComponent,
    BackgroundComponent,
    ProjectsComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
