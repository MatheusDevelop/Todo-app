import { TodoService } from './../todo.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Todo} from './../../todo'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private service: TodoService) { }

  arr:Todo[];

  @Output() mostrarLength = new EventEmitter();
  

  ngOnInit(): void {
    this.service.readAll().subscribe(tasks=>{

        this.arr=tasks;         
        this.mostrarLength.emit(this.arr.length);
      });
    
  }


  onChangeLength(evento){    
    console.log("list component :");
    console.log(evento);
    console.log("list component array :");
    console.log(this.arr.length);
    this.mostrarLength.emit(this.arr.length);
  }


  
  
  


 
    
  

  
}
