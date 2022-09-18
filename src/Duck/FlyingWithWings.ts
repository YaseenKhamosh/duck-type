import FlyBehavior from "./FlyBehavio";

class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('Uh! I can fly...');
    }
}

export default FlyWithWings