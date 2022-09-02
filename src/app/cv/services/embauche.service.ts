import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauchees: Cv[] = [];
  constructor() {}
  /* On veut la liste des personnes embauchées */
  getEmbauchees(): Cv[] {
    return this.embauchees;
  }
  /* je veux embaucher un cv */
  embaucher(cv: Cv): boolean {
    const index = this.embauchees.indexOf(cv);
    if (index == -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
