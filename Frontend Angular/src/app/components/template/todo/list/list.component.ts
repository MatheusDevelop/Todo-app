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

  @Output() mostrarLength = new EventEmitter();
  
  newTaskUpdate:Todo;

  ngOnInit(): void {
    this.service.readAll().subscribe(tasks=>{
        this.arr=tasks;         
        this.mostrarLength.emit(this.arr.length);        
      });  
      
  }





  newTask(event){
    let newTitle =event.target.value;
    let newTask = new Todo(0,newTitle,'2020-05-05T00:00:00',1) 
    this.newTaskUpdate=newTask;
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
