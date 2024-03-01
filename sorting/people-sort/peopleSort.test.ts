import { it, expect } from "vitest";
import { peopleSort} from "./peopleSort";


it("should sort correctly", function () {
  const people = [
    {fname: "Anne", lname: "Orwell"},
    {fname: "George", lname: "Orwell"},
    {fname: "Alan", lname: "Orwell"},
    {fname: "Jane", lname: "Austen"},
    {fname: "Sylvia", lname: "Plath"},
    {fname: "Christopher", lname: "Hitchens"},
    {fname: "Jennifer", lname: "Orwell"},
    {fname: "Jennifer", lname: "Orwell"},
  ];

  expect(peopleSort(people)).toEqual([
    {fname: "Jane", lname: "Austen"},
    {fname: "Christopher", lname: "Hitchens"},
    {fname: "Alan", lname: "Orwell"},
    {fname: "Anne", lname: "Orwell"},
    {fname: "George", lname: "Orwell"},
    {fname: "Jennifer", lname: "Orwell"},
    {fname: "Jennifer", lname: "Orwell"},
    {fname: "Sylvia", lname: "Plath"},
  ]);
});
