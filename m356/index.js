// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

//*var text = document.querySelector("#header").textContent;
var text_1 = document.getElementById('hdr').textContent;
var text_2 = document.getElementById('para').textContent;
console.log('ORIGINAL h1: ',text_1)
console.log('ORIGINAL p : ',text_2)

document.getElementById('para').textContent = text_1;

var text_1 = document.getElementById('hdr').textContent;
var text_2 = document.getElementById('para').textContent;
console.log('REVISED   h1: ',text_1)
console.log('REVISED   p : ',text_2)


