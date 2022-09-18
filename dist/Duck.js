"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    Duck() {
    }
    setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }
    performFly() {
        this.flyBehavior.fly();
    }
    setQuackBehavoir(qb) {
        this.quackBehavior = qb;
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    swim() {
        console.log('All ducks float...');
    }
}
exports.default = Duck;
//# sourceMappingURL=Duck.js.map