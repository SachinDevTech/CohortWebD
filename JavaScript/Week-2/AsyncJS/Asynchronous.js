function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }
  
  const name = "Miriam";
  const greeting = makeGreeting(name);
  console.log(greeting);
  // "Hello, my name is Miriam!"

  

//   Callbacks

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();
  