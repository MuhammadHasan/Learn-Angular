import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/course' , pathMatch: 'full'},
  { path: 'course', component: CoursesListComponent},
  { path: 'course/:id', component: CoursesDetailComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
