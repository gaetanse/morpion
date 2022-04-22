import { poserUneQuestion } from "../tools.js"
import { Win } from "./win.js"

export class Morpion {
    constructor() {
      this.morpions = [["[ ]","[ ]","[ ]"],["[ ]","[ ]","[ ]"],["[ ]","[ ]","[ ]"]]  
      this.tourDuJoueur = true
    }
    async choixDuJoueur(joueur){
        console.log("Joueur : "+joueur+"\nCord y : ")

        let positonY = -50
        do{
            positonY = await poserUneQuestion()
        }while(positonY<1||positonY>2)

        console.log("Cord x : ")
        let positonX = -50
        do{
            positonX = await poserUneQuestion()
        }while(positonX<1||positonX>2)

        if(this.morpions[positonY-1][positonX-1] ==="[X]"||this.morpions[positonY-1][positonX-1] ==="[O]"){
            console.log("case deja utiliser \n")
            await this.choixDuJoueur(joueur)
        }
        else{
            this.morpions[positonY-1][positonX-1] = "["+joueur+"]"
            this.tourDuJoueur = !this.tourDuJoueur
            this.afficherMorpions()
        }
    }
    afficherMorpions(){
        console.log("\n---------")
        for(let y=0;y<3;++y){
            for(let x=0;x<3;++x){
                process.stdout.write(this.morpions[y][x])
            }
            console.log("\n---------")
        }
    }
    check1(j){
        const win = new Win(this.morpions,[0,0,1,1,2,2],j)
        return win.check()
    }
    check2(j){
        const win = new Win(this.morpions,[2,0,1,1,0,2],j)
        return win.check()
    }
    check3(j){
        const win1 = new Win(this.morpions,[0,0,0,1,0,2],j)
        const win2 = new Win(this.morpions,[1,0,1,1,1,2],j)
        const win3 = new Win(this.morpions,[2,0,2,1,2,2],j)
        if(win1.check() || win2.check() || win3.check())
            return true
        return false
    }
    check4(j){
        const win1 = new Win(this.morpions,[0,0,1,0,2,0],j)
        const win2 = new Win(this.morpions,[0,1,1,0,2,0],j)
        const win3 = new Win(this.morpions,[0,2,1,0,2,0],j)
        if(win1.check() || win2.check() || win3.check())
            return true
        return false
    }
    checkIsGameFinish(){
        if(this.check1("[X]") || this.check2("[X]") || this.check3("[X]") || this.check4("[X]")){
            console.log("j1 win")
            return true
        }
        if(this.check1("[O]") || this.check2("[O]") || this.check2("[O]") || this.check2("[O]")){
            console.log("j2 win")
            return true
        }
        return false
    }
    getTourDuJoueur(){ return this.tourDuJoueur }
}