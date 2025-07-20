const Doc: ClassDecorator = (target: any) => {
  console.log(target);
  target.prototype.name = 'hello nest';
};

@Doc
class TestClass {
  name(name: string) {
    console.log(name);
  }
  constructor() {}
}
const test1 = new TestClass();

console.log(test1.name);
