import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h4> {{ contador }}</h4>


    <button (click)="modificar(-1)">-1</button>
    <button (click)="resetearContardor()">Reset</button>
    <button (click)="modificar(1)">+1</button>
    `,
})


export class CounterComponent {

    public contador:number = 10;

    public modificar (valor:number){
        this.contador += valor        
    }

    public resetearContardor(){
        this.contador = 10
    }
}