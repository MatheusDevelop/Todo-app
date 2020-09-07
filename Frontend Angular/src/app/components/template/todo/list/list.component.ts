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
  showUpdateInputs=true;
  newTask(event){
    let newTitle =event.target.value;
    let newTask = new Todo(0,newTitle,'2020-05-05T00:00:00',1) 
    this.newTaskUpdate=newTask;
    console.log(this.newTaskUpdate);
  }
  



  onChangeLength(evento){     
    this.mostrarLength.emit(this.arr.length);
  }  

  
  update(){
    console.log('atualizar no db')
  }
}
