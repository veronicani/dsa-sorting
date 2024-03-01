import { it, expect } from "vitest";
import { caseInsensitiveSort} from "./caseInsensitive";

it("should sort correctly", function () {
  expect(caseInsensitiveSort(["B", "a", "C"])).toEqual(["a", "B", "C"]);
});
