/////////////////////
// Truthy & Falsey //
/////////////////////

// All data in javascript have an inherently Truthy or Falsey value.

// true false
// "dave"

// if(null){
//     console.log("It is true!")
// } else {
//     console.log("It is false!")
// }

// Falsey Values
 // 0
 // ""
 // null
 // undefined
 // false
 // NaN
 
 var user = {
    name: "DAVE",
    email: null,
    friends: ["rick", "sarah"],
    address: {
        street: "123 street",
        city: "gotham"
    },
    id: "0",
    nickname: undefined
}


for (const property in user) {
    if(user[property]){
        torf = 'TRUE'
    }else{
        torf = 'FALSE'
    }
    console.log(`${property}: ${user[property]}  ${torf}`);
}
