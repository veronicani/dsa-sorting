type tPerson = {fname: string, lname: string};

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {
  return arr.sort((a, b) => {
    if (a.lname > b.lname) return 1;
    else if (a.lname < b.lname) return -1;
    else {
      if (a.fname > b.fname) return 1;
      else if (a.fname < b.fname) return -1;
      else return 0;
    }
  });
}

export { peopleSort };
