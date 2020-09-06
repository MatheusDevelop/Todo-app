import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/components/template/todo/todo.service';
import { Todo } from 'src/app/components/template/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoService) { }

  
  length=0;
  ngOnInit(): void { 
   
  }
  onMostrarLength(e){
    this.length=e;
  }

  
  
}
