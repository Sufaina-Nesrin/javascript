//A new feature of ES6 is the template literal.
// This is a special type of string that makes creating complex strings easier.



const person = {
    name: "Zodiac Hasbro",
    age: 56
  };

  // the normal way of consoling a string
  const Greetings = "Hello, my name is "+person.name+"!\n I am "+person.age+" Years old"
  console.log(Greetings);


  
  //it consoles Hello, my name is Zodiac Hasbro!
              //I am 56 years old. 
   //instead of writing this we can use template literal in the following way,we should not use \n for new we
   //can directly write in the code itself;                                   
//.................................................................
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''




  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

  
  //here is the brief description how to use
  //A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), 
  //to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output.
  // This saves inserting \n within strings. The ${variable} syntax used above is a placeholder.
  // Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings,
  // you just drop the variable in a template string and wrap it with ${ and }. Similarly,
  // you can include other expressions in your string literal, for example ${a + b}.
  // This new way of creating strings gives you more flexibility to create robust strings.