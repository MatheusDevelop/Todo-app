import { TodoService } from 'src/app/components/template/todo/todo.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:TodoService) { }
  @Output() novoObj = new EventEmitter
  
  @Input() id_t;
  @Input() newT;
  @Input() close:any;
  

  ngOnInit(): void {
  }



  update(id,newTask){
    this.service.updateFromDatabase(id,newTask).subscribe(()=>{
      this.service.showSnackbar("Tarefa alterada")
      this.novoObj.emit();
      
    },()=>{
      this.service.showSnackbar("Erro ao alterar tarefa, favor tente mais tarde")

    })
  }



}
