import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { dbzService } from '../services/servicio2.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {

    constructor(public dbzService: dbzService) { }

    


    
    
  }
  
  