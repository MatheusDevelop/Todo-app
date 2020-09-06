import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Todo} from './../todo'
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //API CONSUMIDA
  urlApi="https://localhost:44345/api/tasks/";

  constructor(private http:HttpClient,private snack:MatSnackBar) { }

  addToDatabase(task: Todo):Observable<Todo>{		
    return this.http.post<Todo> (this.urlApi,task);
  }
  

  readAll(): Observable<Todo[]>{        
    return this.http.get<Todo[]>(this.urlApi);      
  }

  delete(id:string):Observable<Todo>{    
    return this.http.delete<Todo>(this.urlApi+id);    
  }
  

  showSnackbar(msg:string){
    this.snack.open(msg,'x',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  }

  
  removeElementOfArray(array,id){
    return array.forEach(element => {

        if(element.id_tarefa == id){
          array.splice(array.indexOf(element),1)
        
        }else{
          return
        }
        
      });
  }
  

}
