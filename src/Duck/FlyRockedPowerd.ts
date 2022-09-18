import FlyBehavior from "./FlyBehavio";

class FlyRockedPowerd implements FlyBehavior {
    fly(): void {
        console.log("I can fly with Rocked!!!");
    }
}

export default FlyRockedPowerd;