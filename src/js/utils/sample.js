// Utils for sampling

// Sample from a distrubution
const sampleFromDistribution = (input) => {
  const randomValue = Math.random();
  let sum = 0;
  let result;
  for (let j = 0; j < input.length; j += 1) {
    sum += input[j];
    if (randomValue < sum) {
      result = j;
      break;
    }
  }
  return result;
};

export default sampleFromDistribution;
