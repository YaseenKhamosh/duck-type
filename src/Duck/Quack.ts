import QuackBehavior from "./QuackBehavior";

class Quack implements QuackBehavior{
    quack(): void {
        console.log("I can quack!!!");
    }
}

export default Quack;