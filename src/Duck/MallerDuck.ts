import Duck from "./Duck";
import FlyWithWings from "./FlyingWithWings";
import Quack from "./Quack";

class MallerDuck extends Duck {

    MallerDuck(){
        let flyBehavior = new FlyWithWings()
       let  quackBehavior = new Quack()
    }
  
    display(): void {
        console.log('MallerDuck is flying...');
    }
}

export default MallerDuck;