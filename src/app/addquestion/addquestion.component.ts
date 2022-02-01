import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Answer } from '../models/answer';





@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question: string = "";
  answerNumber: number = 4;
  answer: string = "";
  correct: string = "Vrai";
  type: string = "Classique";
  answers: Array<Answer> = new Array<Answer>();

  constructor(public questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {

  }


  updateAnswers() {

    this.answers.push(new Answer(Math.random() * 1000, this.correct, this.answer, "gray"));
    this.answer = "";
    this.correct = "Vrai";
  }


  saveQuestion(): any {
    let quest = new Question();
    var randNumber = Math.random() * 1000;
    quest._id = randNumber;
    quest.answers = this.answers;
    quest.questionTitle = this.question;
    quest.questionType = this.type;
    this.questionService.addQuestion(quest).subscribe(
      (userInfo: any) => {
        //this.questionService.connectedUser=userInfo;
      },
      (error) => {
        console.log('erreur', error)

      }
    );
  }




}
