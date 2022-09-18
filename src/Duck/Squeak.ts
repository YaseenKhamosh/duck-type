import QuackBehavior from "./QuackBehavior";

class Squeak implements QuackBehavior {
    quack(): void {
        console.log('Squeaking...');
    }
}

export default QuackBehavior;