import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class dbzService {

  constructor() { }


  public characters: Character[] =[
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Piccolo',
      power: 8200
    }
];

  onNewCharacter( character: Character ):void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(newCharacter);    
  }

}
