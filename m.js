function isFirstElementPrime(arr) {
  if (arr.length === 0) {
      console.log("Array is empty. No elements to check.");
      return false;
  }

  const firstElement = arr[0];

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

// Example usage
let myArray = [7, 2, 4, 6];
isFirstElementPrime(myArray);