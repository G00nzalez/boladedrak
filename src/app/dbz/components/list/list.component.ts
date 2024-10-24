import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(id: string): void {
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

}
