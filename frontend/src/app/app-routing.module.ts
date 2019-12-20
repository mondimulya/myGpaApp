import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: '', component: LoginComponent},
  {path: 'subject', component: SubjectComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
