// Array of names
var names = ['John', 'Jane', 'Paul', 'Maria', 'Jack', 'Alice'];

// Loop through names and print hello or goodbye based on first letter
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();  // Get first letter of each name
  
  // Check the first letter and print the appropriate message
  if (firstLetter === 'j') {
    console.log('Goodbye ' + names[i]);
  } else {
    console.log('Hello ' + names[i]);
  }
}
