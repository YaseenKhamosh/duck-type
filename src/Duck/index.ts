import Duck from "./Duck";
import FlyWithWings from "./FlyingWithWings";
import MallerDuck from "./MallerDuck";
import Quack from "./Quack";

let mallerdDuck:Duck = new MallerDuck()

mallerdDuck.setFlyBehavior(new FlyWithWings())
mallerdDuck.setQuackBehavoir(new Quack())
mallerdDuck.performFly()
mallerdDuck.performQuack()