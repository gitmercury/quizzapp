import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizselectionComponent } from './quizselection/quizselection.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserspaceComponent } from './userspace/userspace.component';
import { FillerComponent } from './filler/filler.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { AdminComponent } from './admin/admin.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { UpdateoneComponent } from './updateone/updateone.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizselectionComponent,
    QuestionComponent,
    ResultsComponent,
    HomeComponent,
    QuestionComponent,
    AddquestionComponent,
    StatisticsComponent,
    UserspaceComponent,
    FillerComponent,
    LoginComponent,
    RegisterComponent,
    MultiplayerComponent,
    AdminComponent,
    UpdatequestionComponent,
    UpdateoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    NoopAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
