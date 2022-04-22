import { stdin, stdout } from "process"
import Readline from "readline"
export const poserUneQuestion = async () =>{
    const readLineInterface = Readline.createInterface({
        input : stdin,
        output : stdout
    })
    //atendre la saisie de l'utilisateur
    const result = await (await readLineInterface[Symbol.asyncIterator]().next()).value
    readLineInterface.close()
    return result
}