import { Morpion } from "./morpion.js"

export class Ihm {
    constructor() {
      this.nomJ1 = "X"
      this.nomJ2 = "O"
    }
    async demarrer() {
        const morpion = new Morpion()
        do {
            if(morpion.getTourDuJoueur()) await morpion.choixDuJoueur(this.nomJ1)
            else await morpion.choixDuJoueur(this.nomJ2)
        } while(!await morpion.checkIsGameFinish())
    }
}