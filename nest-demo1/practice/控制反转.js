// 依赖注入 控制反转
class B {
  constructor(b) {
    this.b = b;
  }
}
class A {
  constructor() {
    this.a = 1;
  }
}
const a = new A(); // 在外部进行实例化A
const b = new B(a); // 依赖注入

console.log(b);
