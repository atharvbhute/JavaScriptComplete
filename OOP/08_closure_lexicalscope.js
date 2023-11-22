function one(){
    this.name = "Atharv";
    function two(){
        console.log(this.name);
    }
    two();
}
one();

//1. sibling function cannot get methods or properties of each other
//2. parrents cannot get properties of child
//3. only child can get properties of parrents

//++++++++++++++++++++ Magic of closure +++++++++++++++++++++

// closure is a function which returns function with it's lexical scope
/* 
usecase :  there are few cases where you don't want to execute function and give reference only but 
with argument you want give reference but in that case the function are getting executed, that's where 
concept of closure get's in picture
*/

// working of closure
/*
when you execute function the executional context of that function get's over, here memory plays the role
here as variable get's store in memory like that the function which returns function 
that returned function with it's lexical scope get's stored in memory.
*/