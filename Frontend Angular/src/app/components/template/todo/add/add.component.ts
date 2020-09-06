import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TodoService} from './../todo.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Todo} from './../../todo'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  constructor(private service:TodoService,private snack:MatSnackBar,private rota:Router) { }

  ngOnInit(): void {
  }

  
  inputNameTask:string="";
  inputDate:string=""; 


  hide=true;
  hideButton=true;

  // Animação de abrir e fechar o formulario para adicionar uma tarefa
  handleFormToggle(){
    let el= document.getElementById("form")
    let inputs = document.getElementById('inputs')
    if(el.style.height =='300px'){
      this.hide=true;

      inputs.style.display='none';
      inputs.style.opacity="0";      
      el.style.height='0px';
    }else{
      this.hide=false;     
      inputs.style.display='block';


      setTimeout(() => {
        inputs.style.opacity="1";
      },300); 
      

      el.style.height='300px';
      el.style.maxHeight="100%";
    }
  }

  limparInputs(){
    this.inputDate=""
    this.inputNameTask=""
  }

  @Output() novoObj = new EventEmitter;
  idTemp=0;
  // Envia os dados dos formularios para o service, e do service se conecta com o back-end
  pushToDatabase(){
    if(!this.hideButton){
      let tarefa = new Todo(this.idTemp,this.inputNameTask,this.inputDate);
      
      
      //conectado ao service
      this.service.addToDatabase(tarefa).subscribe(()=>{
        this.mostrarSnack('Adicionado com sucesso')
        this.novoObj.emit();
        
      },()=>{ 
            
        this.mostrarSnack('Erro ao adicionar')    
      });
      
      
      this.limparInputs();
      
    }


  }
 
  mostrarSnack(msg){
    this.snack.open(msg,'x',{
      duration:2000,
      horizontalPosition:"left",
      verticalPosition:'top'
    })
  }


  // Mostra ou oculta o botão para salvar uma tarefa
  verificarCampos(){
    
    if(this.inputNameTask.length>0 && this.inputDate.length>0){
      this.hideButton=false;
    }else{
      this.hideButton=true;
    }
    
  }








}
