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



  text= '';
  date = '';
  newTaskText(event,dateP,checked){ 
    this.text=event.target.value;
    if(this.date.length<=1){
      this.date = dateP
    }
    this.newTaskUpdate = new Todo(0,this.text,this.date,checked)
        
  }
  x(){
    return 'string'
  }
  dateParser(str){
    //2020/08/15 00:00:00
    let date = str.split('/')[0];
    let mouth = str.split('/')[1];
    let year = str.split('/')[2].split(' ')[0];
    let hour = str.split('/')[2].split(' ')[1];
    
    //2020-08-15T00:00:00
    return `${year}-${mouth}-${date}T${hour}`

  }

  newTaskDate(event,taskText,checked=0){
    this.date=event.target.value;
    if(this.text.length<1){
      this.text = taskText;
    }

    this.newTaskUpdate = new Todo(0,this.text,this.date,checked)
    this.valid = true;
    
  }
  valid:boolean;
  
  
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
