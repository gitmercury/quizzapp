import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { QuizselectionComponent } from './quizselection/quizselection.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
//import { QuizselectionmultiComponent } from './quizselectionmulti/quizselectionmulti.component';

import { StatisticsComponent } from './statistics/statistics.component';
import { UserspaceComponent } from './userspace/userspace.component';
import { FillerComponent } from './filler/filler.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { AdminComponent } from './admin/admin.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { UpdateoneComponent } from './updateone/updateone.component';

const routes: Routes = [
  
  {path:'addquestion', component:AddquestionComponent},
  {path:'question', component:QuestionComponent},
  {path:'results', component:ResultsComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path: 'quizsel', component:QuizselectionComponent},
 // {path: 'quizselmulti', component:QuizselectionmultiComponent},

  {path: 'stats', component:StatisticsComponent},
  {path: 'user', component:UserspaceComponent},
  {path: 'filler', component:FillerComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'multiplayer', component:MultiplayerComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'updatequestion', component:UpdatequestionComponent},
  {path: 'updateone', component:UpdateoneComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
