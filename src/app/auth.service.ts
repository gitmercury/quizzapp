import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './models/user';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectedUser:any=null;
  //fullName:any=null;
  //password:any=null;
  isAdmin:boolean=false;
  //user:User=new User();

  constructor(private http:HttpClient) { 
    this.isLogged();
  }

  login(login: any,password: any): Observable<any>{
    return this.http.post("http://localhost:5000/login", {login:login , password:password}, {withCredentials: true} );
  }
  logout():Observable<any>{
    console.log("logingout")
    this.connectedUser=null;
    return this.http.get("http://localhost:5000/logout", {withCredentials: true} );


  }
  register(login:any,password:any,fullName:any):Observable<any>{
    return this.http.post("http://localhost:5000/register", {login:login , password:password, fullName:fullName}, {withCredentials: true} );
  }
  
  updateAccount(user:User):Observable<any>{
    console.log(user);
    return this.http.put("http://localhost:5000/updateuser" , user,{withCredentials: true});
  }

  deleteAccount(user:User):Observable<any>{
    console.log(user);
    return this.http.delete("http://localhost:5000/deleteuser/" + user.login, {withCredentials: true});
  }

  
  isLogged(){
    this.http.get("http://localhost:5000/islogged", {withCredentials: true}).subscribe(
      (connectedUser: any)=>{
        this.connectedUser=connectedUser;

        //this.connectedUser= connectedUser;
      
        console.log('Connecté')

      }, 
      (error)=>{
        console.log("non connecté")
      }

    )
  }
}