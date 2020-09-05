import { Component, OnInit } from '@angular/core';
import {TodoService} from './../todo.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:TodoService) { }

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



  // Envia a formação dos formularios para o service, e do service se conecta com o back-end
  pushToDatabase(){
    if(!this.hideButton){
      this.inputDate=""
      this.inputNameTask=""
      // conectado ao service
      this.service.showMsg();



    }

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
