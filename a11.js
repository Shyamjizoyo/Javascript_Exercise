var officers = [
    { id: 20, name: 'Captain Piett',rl:1 },
    { id: 24, name: 'General Veers',rl:2 },
    { id: 56, name: 'Admiral Ozzel',rl:3 },
    { id: 88, name: 'Commander Jerjerrod',rl:4}
  ];

  // print id by using .map function
  var officersIds = officers.map(function (officer) {
    return officer.id
  });
  console.log(officersIds)

// print rollno by using arrow function
const officersrl = officers.map(officer => officer.rl);
console.log(officersrl)

  // print name by using .foreach function
var officersname = [];
officers.forEach(function (officer) {
  officersname.push(officer.name);
});
  console.log(officersname)