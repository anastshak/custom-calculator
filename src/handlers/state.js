let A = null;
let B = null;
let operator = null;

export function getA() {
  return A;
}
export function setA(value) {
  A = value;
}

export function getB() {
  return B;
}
export function setB(value) {
  B = value;
}

export function getOperator() {
  return operator;
}
export function setOperator(value) {
  operator = value;
}

export function clear() {
  A = null;
  B = null;
  operator = null;
}
