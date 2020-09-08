import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

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
  leftSecounds=60;
  // 0 = PLAY
  // 1 = STOP
  // 2 = REPEAT

  buttonStates =0;

  stop=false;
  
  
  pomodoroClock(){
    
    let secounds = setInterval(()=>{
      if(this.leftSecounds>0){

        if(this.stop){                    
          clearInterval(secounds);           
          this.stop=false;         

        }else{
          this.leftSecounds--;
          
        }
      }else{

        this.leftMinutes--

        if(this.leftMinutes>0){
          this.leftSecounds=60;
        }else{
          //seta para um state que oculta os botoes e so mostra a opçao de reiniciar o clock
          this.buttonStates=2;

          this.playAudio()
          clearInterval(secounds);
        }
      }
    },1000)  
    

    
    
    this.buttonStates=1;
  }


  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/notification.mp3";
    audio.load();
    audio.play();
  }


  stopClock(){
    this.stop=true;
    this.buttonStates=0;
    
  }
    
  restoreClock(){
    
    this.leftMinutes=24;
    this.leftSecounds=60;
    this.buttonStates=0;
    
    
    
  }

}
