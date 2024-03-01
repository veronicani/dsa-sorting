/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let lowest = nums[i];
    let lowestIdx = i;
    let idxToSwap = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < lowest) {
          lowest = nums[j];
          idxToSwap = j;
        }
      }
    nums[idxToSwap] = nums[lowestIdx];
    nums[lowestIdx] = lowest;
  }
  return nums;
}

export { selectionSort };

