import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';

  public titulo:string = 'Primer ejemplo de angular'
  public contador:number = 25;


  modificar (valor:number){
    this.contador += valor
  }

  resetearContardor(){
    this.contador = 25
  }


}
