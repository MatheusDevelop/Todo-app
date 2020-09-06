import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
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
  

  readAll(): Observable<Todo[]>{        
      return this.http.get<Todo[]>(this.urlApi);      
  }

  delete(id:string):Observable<Todo>{    
    return this.http.delete<Todo>(this.urlApi+id);    
  }
  
  

}
