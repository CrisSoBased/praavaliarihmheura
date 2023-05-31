import { Component, OnInit,Injectable } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'flores-home',
  templateUrl: 'flores.page.html',
  styleUrls: ['flores.page.scss'],
})
export class FloresPage implements OnInit {
  items: string[] = [];
  see: string = "";
  iss: string[] = ["rosa","cravo","orquidia","margarida","girassol","tulipa"];
  indexs: string[] = []
  teste: any[];
  constructor() {
    this.teste = []; // Inicialize o array como vazio
  }
  checkCredentials() {
    alert("Margaridas pó cesto")
    }
  
  
    ngOnInit() {
    for (let i = 1; i < 7; i++) {
      
      this.indexs.push(`../assets/images/Screenshot_${this.iss[i-1]}.png`);
      
      

    }
    
  
  }
  setTeste(teste: any[]) {
    this.teste = teste;
  }
  tack(item: string){
    const resultado = item.slice(0, item.length - 4).substring(28, item.length - 4);
    
    for(let i = 0; i < this.iss.length; i++){
      if(this.iss[i] == resultado){
        console.log(i);
        this.teste.push(i);
      }
    }
  }
  getTeste() {
    return this.teste;
  }

}
