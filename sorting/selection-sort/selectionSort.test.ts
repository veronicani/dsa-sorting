import { it, expect } from "vitest";
import { selectionSort } from "./selectionSort";

it("should sort numbers in ascending order", function () {
  expect(selectionSort([5, 1, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(selectionSort([])).toEqual([]);
});
