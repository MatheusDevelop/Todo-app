import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide=true;
  handleFormToggle(){
    let el= document.getElementById("form")
    if(el.style.height =='300px'){
      this.hide=true;
      el.style.height='0px';
    }else{
      this.hide=false;
      el.style.height='300px';
    }
  }

  pushToDatabase(){
    // Pegar os dados e puxar o service 
  }









}
