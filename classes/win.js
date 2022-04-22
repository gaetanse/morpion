export class Win {
    constructor(table,pos,j) {
        this.win = []
        if(table[pos[0]][pos[1]]===j){
            this.win.push(true)
        }
        if(table[pos[2]][pos[3]]===j){
            this.win.push(true)
        }
        if(table[pos[4]][pos[5]]===j){
            this.win.push(true)
        }
    }
    check(){
        if(this.win.length === 3)
            return true
        else
            return false
    }
}