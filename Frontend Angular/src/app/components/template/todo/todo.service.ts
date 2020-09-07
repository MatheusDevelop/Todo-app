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

  delete(id):Observable<Todo>{    
    return this.http.delete<Todo>(this.urlApi+id);    
  }

  updateFromDatabase(id,newTask: Todo):Observable<Todo>{   
    return this.http.put<Todo>(this.urlApi+id,newTask);
  }
  

  showSnackbar(msg:string){
    this.snack.open(msg,'x',{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'bottom'
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

  stringDateConvert(dateString:string){
    
    let string=dateString;   


    let hour=string.split("/")[2].split(' ')[1].split(":")[0];
    let minute=string.split("/")[2].split(' ')[1].split(":")[1];
    let secound=string.split("/")[2].split(' ')[1].split(":")[2];

    let time = new Date();
    let hourNow = time.getHours();
    let minuteNow = time.getMinutes();
    

    function Clock(){
      let hourLeft=parseInt(hour)-hourNow;

      let minuteLeft=parseInt(minute)-minuteNow;
      
      if(minuteLeft<0){
        minuteLeft=60+minuteLeft;
      }

     

      return`Faltam ${hourLeft}h e ${minuteLeft}m para a entrega`;  

    }
    

    
    return {     
      Clock      
    }
      
  }


  DateForObjs(){

    let time = new Date();
    let date = time.getUTCDate();
    let mounth = time.getUTCMonth();
    let year = time.getUTCFullYear();
    
    
    let newDate = date.toString();
    let tomorrow="";
    if(date < 9 ){
      newDate=`0${date}`;
      tomorrow=`0${date+1}`
      
      
    }

    let newMounth = mounth.toString();
    if(mounth < 9 ){
      newMounth=`0${date}`;
      mounth = parseInt(newMounth);
     
    }



    return{
      stringForInputs:
        {
          today:`${year}-${newMounth}-${newDate}T00:00:00`,
          tomorrow:`${year}-${newMounth}-${tomorrow}T00:00:00`
        }
      
    }




  }
  

}
