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


  handleFormToggle(){
    let el= document.getElementById("form")
    let inputs = document.getElementById('inputs')
    if(el.style.height =='300px'){
      this.hide=true;
      inputs.style.display='none';
      el.style.height='0px';
    }else{
      this.hide=false;
      inputs.style.display='block';
      el.style.height='300px';
      el.style.maxHeight="100%";
    }
  }

  pushToDatabase(){
    if(!this.hideButton){

      console.log(this.inputNameTask);
      console.log(this.inputDate);


      this.inputDate=""
      this.inputNameTask=""

      // conectado ao service
      this.service.showMsg();



    }

  }


  verificarCampos(){
    
    if(this.inputNameTask.length>0 && this.inputDate.length>0){
      this.hideButton=false;
    }else{
      this.hideButton=true;
    }
    
  }








}
