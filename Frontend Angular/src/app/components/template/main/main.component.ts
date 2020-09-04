import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened=false;

  handleToggleSidebar(){
    if(this.opened){
      this.opened=false;
    }else{
      this.opened=true;
    }
  }
  
}
