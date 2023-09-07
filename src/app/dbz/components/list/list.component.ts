import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 20
  }];

  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje
    if(!id) return;
    this.onDelete.emit(id);
  }

}
