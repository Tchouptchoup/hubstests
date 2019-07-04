function isPrime(x) {
  for (let j = 2; j < x; j += 1) {
    if (x % j === 0) {
      return false;
    }
  }
  return true;
}

export const findThePrime = number => {
  let primeTab = [];
  for (let i = 2; primeTab.length < parseInt(number); i += 1) {
    if (isPrime(i)) {
      primeTab.push(i);
    }
  }
  return primeTab[parseInt(number) - 1];
};
