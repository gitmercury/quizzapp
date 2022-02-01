import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-filler',
  templateUrl: './filler.component.html',
  styleUrls: ['./filler.component.css']
})
export class FillerComponent implements OnInit {
  
  try:String="";
  question: Question | any= new Question();
  questions: Array<Question> = new Array<Question>();
  answersToFind:Array<String|any> = new Array<String|any>(); 
  answersFound: Array<String> = new Array<String>(); 

  constructor(public questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
    setTimeout(() => {
      console.log('o');
      console.log(this.questions);
      this.question = this.questions.pop();
      for (let answer of this.question.answers){
        this.answersToFind.push(answer.answerTitle);
      }
      


      console.log(this.question);


    },
      2000);

  }

  

  getQuestions() {
    this.questionService.getQuestions().subscribe(
      (questions: Array<Question>) => {
        for (let i = 0; i < Math.min(questions.length,15); i++) {
          if (questions[i].questionType==="Filler"){
            this.questions.push(questions[i]);
          }
          
        }
        
        //this.questionService.connectedUser=userInfo;
      },
      (error: any) => {
        console.log('erreur', error)

      }
    );
  }


  tryPlayer(){
    let index=this.answersToFind.indexOf(this.try);
    if (index>-1){
      if (!this.answersFound.includes(this.try)){
        this.answersFound.push(this.try);
        this.answersToFind.splice(index, 1);
      this.try="";
      }
      
    }
    if (this.answersFound.length===this.answersToFind.length){
      this.router.navigate(["/results"]);
    }
  
    }

    showResult(){
      for (let answer of this.answersToFind){
        this.answersFound.push(answer);
      }
      this.answersToFind=new Array<String|any>();
    }

    tryAnotherOne(){
      setTimeout(() => {
        if (this.questions.length === 0) {
          this.router.navigate(['/home']);
          
        }
        this.question=this.questions.pop();
      this.answersToFind=new Array<String|any>();
      this.answersFound=new Array<String|any>();
      for (let answer of this.question.answers){
        this.answersToFind.push(answer.answerTitle);
      }
  
  
      },
        400);
      
    }
  

}
