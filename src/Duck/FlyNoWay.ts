import FlyBehavior from "./FlyBehavio";

class FlyNoWay implements FlyBehavior{
    fly(): void {
        console.log("oops! I can't fly!!!");
    }
}

export default FlyBehavior