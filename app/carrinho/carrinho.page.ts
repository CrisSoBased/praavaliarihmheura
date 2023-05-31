import { Component, OnInit  } from '@angular/core';
import { FloresPage } from 'src/app/flores/flores.page';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss'],
})
export class CarrinhoPage  implements OnInit {

  constructor(private floresService: FloresPage) {}

  checkCredentials(){
    alert("nice");
  }

  ngOnInit() {
    
    console.log(this.floresService.getTeste());
  }

}
 