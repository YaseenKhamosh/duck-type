"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const FlyingWithWings_1 = __importDefault(require("./FlyingWithWings"));
const Quack_1 = __importDefault(require("./Quack"));
class MallerDuck extends Duck_1.default {
    MallerDuck() {
        let flyBehavior = new FlyingWithWings_1.default();
        let quackBehavior = new Quack_1.default();
    }
    display() {
        console.log('MallerDuck is flying...');
    }
}
exports.default = MallerDuck;
//# sourceMappingURL=MallerDuck.js.map