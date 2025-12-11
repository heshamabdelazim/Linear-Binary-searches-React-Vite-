import type { product } from "../data";
let id = 1;

export const binarySearch = (arr: string[], target: string) => {
  let first = 0;
  let end = arr.length - 1;

  /* INSIDE LOOP
    let middle = Math.floor((first + middle)/2); 
    target below the middle? => first the same && last = middle && middle = 
    */
  const timeBefore = performance.now();
  while (end >= first) {
    const middle = Math.floor((first + end) / 2);

    console.log(
      `Current search range: [${first}, ${end}] | middle index: ${middle}`
    );

    const middleName = arr[middle];

    if (target === middleName) {
      const timeAfter = performance.now();
      console.log(`time binary took is ${timeAfter - timeBefore}ms`);
      return [arr[middle]];
    } else if (target > middleName) {
      first = middle + 1;
      console.log(`Target is greater. New 'first' is ${first}`);
    } else if (target < middleName) {
      end = middle - 1;
      console.log(`Target is smaller. New 'end' is ${end}`);
    }
    console.log(
      "%c an iterate is done----------------------",
      "color: green; font-weight: bold;"
    );
  }
};

/**
 // Assuming product is defined somewhere, e.g.:
// type product = { name: string, price: number, 

export const binarySearch = (arr: product[], target: string) => {
  let first = 0;
  let end = arr.length - 1;

  const timeBefore = performance.now();

  // The loop continues as long as the search space is valid
  while (first <= end) {
    // 1. Calculate the middle index for the current search space
    const middle = Math.floor((first + end) / 2);

    console.log(`Current search range: [${first}, ${end}] | middle index: ${middle}`);

    const middleName = arr[middle].name;

    if (target === middleName) {
      // 2. Found the target!
      const timeAfter = performance.now();
      console.log(`time binary took is ${timeAfter - timeBefore}ms`);
      return [arr[middle]];
      
    } else if (target > middleName) {
      // 3. Target is in the upper half.
      // Move 'first' boundary to exclude the lower half and 'middle' element.
      first = middle + 1;
      console.log(`Target is greater. New 'first' is ${first}`);
      
    } else { // target < middleName
      // 4. Target is in the lower half.
      // Move 'end' boundary to exclude the upper half and 'middle' element.
      end = middle - 1;
      console.log(`Target is smaller. New 'end' is ${end}`);
    }
    
    console.log("An iteration is done---------------------- ");
  }

  // 5. If the loop finishes, the element was not found.
  console.log("Target not found.");
  return []; // Return an empty array or null to indicate not found
};
 
 */
