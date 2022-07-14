"use strict";
// export class Cylinder {
//     public static getVolume(radius: number, height: number): number {
//         let baseArea: number = Math.PI * radius * radius;
//         let perimeter: number = 2 * Math.PI * radius;
//         let volume: number = perimeter * height + 2 * baseArea;
//         return volume;
//     }
// }
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
