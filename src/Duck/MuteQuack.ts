import QuackBehavior from "./QuackBehavior";

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log("I can't quack at all...");
    }
}

export default QuackBehavior