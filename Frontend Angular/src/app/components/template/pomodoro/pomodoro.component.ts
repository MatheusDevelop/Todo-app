import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  leftMinutes=25;

  // 0 = PLAY
  // 1 = STOP
  // 2 = REPEAT
  buttonStates=0;


  clear(func){
    return 
  }
  
  pomodoroClock(){
    
    let x = setInterval(()=>{
      if(this.leftMinutes>0){
        this.leftMinutes=this.leftMinutes-1; 
      }else{
        this.buttonStates=2;
        //Fazer uma notificação pra quando terminar o pomodoro
        alert('Pomodoro terminado');
        clearInterval(x);
      }
    },6000)

    this.buttonStates=1;
   
   


  }

}
