import { TodoService } from 'src/app/components/template/todo/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private service: TodoService) { }
  @Output() Obj = new EventEmitter;
  @Input() id_t;
  @Input() array;

  ngOnInit(): void {
  }
  
  

  removeOfDatabase(id){    
    this.service.delete(id).subscribe(()=>{          
    },(err)=>{
      console.log(err);
    });    
    this.array.forEach(element => {
      if(element.id_tarefa == id){
        this.array.splice(this.array.indexOf(element),1)
        
      }else{
        return
      }
    });
    
  }








  

}
