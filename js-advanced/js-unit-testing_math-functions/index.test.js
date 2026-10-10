import { add, subtract, multiply, divide } from "./index.js";

test("add(2, 3) should result in 5", () => {
    const result = add(2, 3)
    expect(result).toBe(5)
});

test("add(-2, -3) returns a negative value if the greater argument is negative", () => {
    const result = add(-2, -3)
    expect(result).toBeLessThan(0);
});

test("add(0.1, 0.2) returns a value close to 0.3", () => {
    const result = add(0.1, 0.2)
    expect(result).toBeCloseTo(0.3);
});

test("subtract(15, 5) returns 10 if called with subtract", () => {
    const result = subtract(15, 5)
    expect(result).toBe(10);
});

test("subtract(5, 10) return a negative value if the greater argument is negativ", () => {
    const result = subtract(5, 10)
    expect(result).toBeLessThan(0);
});

test("multiply(2, 4) returns 8 if called with multiply", () => {
    const result = multiply(2, 4)
    expect(result).toBe(8);
});

test("multiply(-2, 4) returns a negative value if only the first argument is negative", () => {
    const result = multiply(-2, 4)
    expect(result).toBeLessThan(0);
});

test("multiply(2, -4) returns a negative value if only the second argument is negative", () => {
    const result = multiply(2, -4)
    expect(result).toBeLessThan(0);
});

test("multiply(-2, -4) returns a positive value if called with two negative arguments", () => {
    const result = multiply(-2, -4)
    expect(result).toBeGreaterThan(0);
});

test("divide(9, 3) return 3 if called with divide", () => {
    const result = divide(9, 3)
    expect(result).toBe(3);
});

test("divide(9, 0 ) returns 'You should not do this!' if called with 0 as second argument", () => {
    const result = divide(9, 0);
    expect(result).toBe("You should not do this!");
});