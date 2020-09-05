import { Component, OnInit } from '@angular/core';
import {Todo} from './../../todo'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  json='[{"tarefa":"Fazer tal coisa","dataUtc":"Data"},{"tarefa":"Fazer tal coisa2","dataUtc":"Data"},{"tarefa":"Fazer tal coisa3","dataUtc":"Data"},{"tarefa":"Fazer tal coisa4","dataUtc":"Data"}]' 
  arr=[];
  ngOnInit(): void {
    this.jsonToClassArray(this.json)
  }


  jsonToClassArray(json){
    let obj=JSON.parse(json);
    let newArr=[]

    obj.forEach(element => {
      let todo=new Todo(element.tarefa,element.dataUtc);
      this.arr.push(todo)      
    });    
    
  }

  
}
