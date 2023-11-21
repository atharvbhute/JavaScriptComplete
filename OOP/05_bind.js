const model = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
const unboundGetX = model.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(model);
  console.log(boundGetX());
  // Expected output: 42

//+++++++++++++++++++++ playing with bind and call ++++++++++++++++++++++++++

const User = {
    username : "atharvbhute",
    sayMyName : function(){
        console.log(this.username);
    }
}

const anotherUser = {
    username : "john"
}

// call
User.sayMyName.call(anotherUser); // John

// using bind 
const userJohn = User.sayMyName.bind(anotherUser);
userJohn();

/*
    Execution Time:

1.  call: Invokes the function immediately with the specified this context and arguments.
    bind: Returns a new function with the specified this context, but it doesn't invoke the function immediately. Instead, it creates a new function that can be invoked later.
    Return Value:

2.   call: Executes the function and returns the result if the function has a return statement.
    bind: Returns a new function with the bound context. It doesn't execute the original function immediately.
    */


