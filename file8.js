let f4 = () => {
  let a = 10;
  let f5 = () => {
    console.log(a)
  }
 f5();
}
f4()


let f6 = () => {
  let a = 10;
  let f7 = () => {
    console.log(a)
  }
  return f7();
}
let rf = f6();


let f8 = () => {
  let b = 20
  let f9 = () => {
    console.log(b)
  }
  f9()
}
f8()
