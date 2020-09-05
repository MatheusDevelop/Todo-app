import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Todo} from './../todo'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //API CONSUMIDA
  urlApi="https://localhost:44345/api/tasks/";

  constructor(private http:HttpClient) { }

  addToDatabase(task: Todo):Observable<Todo>{		
    return this.http.post<Todo> (this.urlApi,task);
  }
  
  

}
