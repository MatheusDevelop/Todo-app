import { TodoService } from './../todo.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Todo} from './../../todo'
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(public service: TodoService) { }

  arr:Todo[];
  
  leftTasks=0;
  @Output() mostrarLength = new EventEmitter();
  
  newTaskUpdate:Todo;

  ngOnInit(): void {
    this.service.readAll().subscribe(tasks=>{
        this.arr=tasks; 
        this.leftTasks=0;



        this.arr.forEach(element => {
          if(element.checked == 1){
            return
          }else{
            this.leftTasks++
          }
        });
       
        this.mostrarLength.emit(this.leftTasks);
       
        
       
               
      });  
      
  }





  newTask(event,checked=0,text=true){
    
   //fazer Att    
  }
  
  handleInputToggle(id,close=false){
    
    if(close){
      this.arr.forEach(element => {
        
        if(element.id_tarefa == id){
          
          element.showUpdateInputs=false;
          
        }else{
          
          return
        }
        
      });
    }else{

      this.arr.forEach(element => {
        
        if(element.id_tarefa == id){
          
          element.showUpdateInputs=true;
          
        }else{
          element.showUpdateInputs=false;
          return
        }
        
      });
    }
  }


  onChangeLength(evento){     
    this.mostrarLength.emit(this.arr.length);
  }  

  
  update(checkbox=false,id,tarefa,dataUtc){
    if(checkbox){
      let task = new Todo(0,tarefa,dataUtc,0);      
      this.service.updateFromDatabase(id,task).subscribe(()=>{
        this.ngOnInit();
      })
    }else{
      let task = new Todo(0,tarefa,dataUtc,1);      
      this.service.updateFromDatabase(id,task).subscribe(()=>{
        
        this.ngOnInit();

      })
    }
  }
}
