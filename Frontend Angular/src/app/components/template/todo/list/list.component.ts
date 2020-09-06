import { TodoService } from './../todo.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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


  
  
  


 
    
  

  
}
