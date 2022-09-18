import FlyBehavior from "./FlyBehavio";
import QuackBehavior from "./QuackBehavior";

abstract class Duck  {
    
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior
    
    public Duck(){
    }

    abstract display():void;

    setFlyBehavior(fb:FlyBehavior):void {
        this.flyBehavior = fb;
    }

    performFly():void {
        this.flyBehavior.fly();
    }

    setQuackBehavoir(qb:QuackBehavior):void{
        this.quackBehavior = qb;
    }
    performQuack():void {
        this.quackBehavior.quack()
    }

    swim():void {
        console.log('All ducks float...');
    }

}

export default Duck