import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  showMsg(){
    console.log("Conectado com o service")
  }


}
