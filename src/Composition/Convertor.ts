import Pushable from "./Pushable";

class Convertor {
    push;
    constructor(){
        this.push = new Pushable()
    }
    convert(){
        console.log('Converting...');
        return true;
    }
}

let convert = new Convertor()
convert.convert()
convert.push.sendPushMethod()