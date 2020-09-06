import { TodoService } from 'src/app/components/template/todo/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private service: TodoService) { }

  @Output() remObj = new EventEmitter;

  // usado para identificar qual item vai remover do db
  @Input() id_t;
  @Input() array;
  
  
  
  ngOnInit(): void {
  }
  
  

  removeOfDatabase(id){
    // Deleta a task do database pelo id
    this.service.delete(id).subscribe(()=>{
      this.service.showSnackbar('Tarefa removida');      
      this.service.removeElementOfArray(this.array,id);    
    },(err)=>{
      console.log(err);

    });     
  }


  // emite um evento para a list , e da list para a view todo que atualiza o length assincronamente à requisição

  emitTest(){
    this.service.removeElementOfArray(this.array,this.id_t); 
    this.remObj.emit(this.id_t);
  }



  





  

}
