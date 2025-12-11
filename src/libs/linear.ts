export const linearSearch = (arr: product[], target: string): product[] => {
  const sortedArr = arr.sort();
  const target_lowercase = target.toLowerCase(); //o(N)
  let outputArr: product[] = [];
  const startTime = performance.now();
  for (let x = 0; x <= sortedArr.length; x++) {
    //o(N)
    const productName: string = sortedArr[x]?.toLowerCase(); //o(N)
    const isFound =
      productName == target_lowercase ||
      productName?.includes(target_lowercase); //o(L) inside o(N) => O(N*L)
    if (isFound) {
      outputArr.push(sortedArr[x]);
    }
  }
  const endTime = performance.now();
  console.log(startTime);
  console.log(endTime);
  console.log(`time linear took is ${endTime - startTime}`);
  return outputArr;
};
