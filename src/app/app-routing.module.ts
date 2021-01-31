import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'my-projects', component: MyProjectsComponent},
    {path: 'contact-me', component: ContactMeComponent },
  ]},
  
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
