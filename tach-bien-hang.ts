// export class Calculator {
//     public static calculate(a: number, b: number, o: string): number {
//         switch (o) {
//             case '+':
//                 return a + b;
//             case '-':
//                 return a - b;
//             case '*':
//                 return a * b;
//             case '/':
//                 if (b != 0)
//                     return a / b;
//                 else
//                     console.log("Can not divide by 0");
//             default:
//                 console.log("Unsupported operation");
//         }
//     }
// }
// Biến a: firstOperand - toán hạng đầu tiên
// Biến b: secondOperand - toán hạng thứ hai
// Biến o: operator - toán tử

// -------- Sau khi đổi tên biến ----------

// export class Calculator {
//     public static calculate(firstOperand: number, secondOperand: number, operator: string): number {
//         switch (operator) {
//             case '+':
//                 return firstOperand + secondOperand;
//             case '-':
//                 return firstOperand - secondOperand;
//             case '*':
//                 return firstOperand * secondOperand;
//             case '/':
//                 if (secondOperand != 0)
//                     return firstOperand / secondOperand;
//                 else
//                     console.log("Can not divide by 0");
//             default:
//                 console.log("Unsupported operation");
//         }
//     }
// }

// -----tách hằng -----

export class Calculator {
    static readonly ADDITION = '+';
    static readonly SUBTRACTION = '-';
    static readonly MULTIPLICATION = '*';
    static readonly DIVISION = '/';

    public static calculate(firstOperand: number, secondOperand: number, operator: string): number {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}