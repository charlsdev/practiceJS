const users = [
  {
    id: 1,
    name: 'abc',
    place: 'xyz'
  },
  {
    id: 2,
    name: 'def',
    place: 'uvw'
  }
]

let user;

// To find a match
user = users.find(
  e => e.id == 1
);

// To find index of the match
user = users.findIndex(
  e => e.id == 1
);

// To find all the matches (as array)
user = users.filter(
  e => e.place == 'xyz'
);