"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlyingWithWings_1 = __importDefault(require("./FlyingWithWings"));
const MallerDuck_1 = __importDefault(require("./MallerDuck"));
const Quack_1 = __importDefault(require("./Quack"));
let mallerdDuck = new MallerDuck_1.default();
mallerdDuck.setFlyBehavior(new FlyingWithWings_1.default());
mallerdDuck.setQuackBehavoir(new Quack_1.default());
mallerdDuck.performFly();
mallerdDuck.performQuack();
//# sourceMappingURL=index.js.map