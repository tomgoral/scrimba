var button = document.getElementById("button")
var input  = document.getElementById("input").value;

var MyList = document.getElementById("MyList")
var MyListItems = MyList.getElementsByTagName("li")
var newLi  = document.createElement("li")
var array = []

console.log("Variable: ", MyList)
console.log("Nodes", MyList.childNodes)


console.log(MyListItems)
i = 0
for (each of MyListItems) { 
    console.log(each.textContent)
    array [i] = each.textContent
    i +=1
}

console.log(array) 




function handleButtonClick() {
    newLi.textContent = document.getElementById("input").value
    MyList.appendChild(newLi)
    console.log(MyList)
    console.log(document.getElementById("input").value)
}

button.addEventListener("click", handleButtonClick)