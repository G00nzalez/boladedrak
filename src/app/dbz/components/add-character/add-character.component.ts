import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character ={
    id: uuid(),
    name: 'Un Superheroe',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name= '';
    this.character.power= 0;
  }

}



