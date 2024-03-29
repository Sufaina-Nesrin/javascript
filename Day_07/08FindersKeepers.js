//Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that 
//passes a 'truth test'. This means that given an element x, the 'truth test' 
//is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr, func) {
    let num = undefined;
    for(let i=0; i<arr.length ; i++){
       
        if(func(arr[i])===true){
            num =arr[i];
            break;
        }
    }
    return num
  }
  
  console.log(findElement([1, 5, 3, 9], num => num % 2 === 0));//returns undefined
  console.log(findElement([1, 2, 3, 5], num => num % 2 === 0))//returns 2

