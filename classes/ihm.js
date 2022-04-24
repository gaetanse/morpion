import { Morpion } from "./morpion.js"

export class Ihm {
    constructor() {}
    async demarrer() {
        const morpion = new Morpion()
        do {
            if(morpion.getTourDuJoueur()) await morpion.choixDuJoueur("X")
            else await morpion.choixDuJoueur("O")
        } while(!await morpion.checkIsGameFinish())
    }
}