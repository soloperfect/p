//sum of squares of the elements of an array
let Ar = [1, 2, 3, 4, 5];
let sum =0
function sumOfSquares(arr) {
    
  
   
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i];
    }
  
   
    return sum;
  }
  
 result = sumOfSquares(Ar);
  
  console.log("Sum of squares:", result);

  // odd or even.

  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  // prime or not
  let gr= [8, 2, 4,66, 6];
function Prime(arr) {
    if (arr.length === 0) {
        console.log("Array is empty. No elements to check.");
        return false;
    }

    let firstElement = arr[0];

    if (firstElement < 2) {
        console.log("The first element is not a prime number.");
        return false;
    }

    for (let i = 2; i < firstElement; i++) {
        if (firstElement % i === 0) {
            console.log("The first element is not a prime number.");
            return false;
        }
    }

    console.log("The first element is a prime number.");
    return true;
}
Prime(gr);