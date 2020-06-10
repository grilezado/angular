import { GoalsComponent } from './goals/goals.component';
import { AboutComponent } from './component/about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : '', component: AboutComponent},
  { path : 'about', component: AboutComponent},
  { path : 'goals', component : GoalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
