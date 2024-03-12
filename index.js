let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

function renderItems() { 
    itemsDiv.innerHTML = null;
    

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom="10px"
        const text = document.createElement("p");
        text.style.display = "inline"
        text.style.marginRight="10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete";
        button.onclick =()=> removeItem(idx);

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)

    }
}



function loadItems() { 
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() { 
    const stringItems = JSON.stringify(items);
     localStorage.setItem(storageKey, stringItems)

}

function addItem() { 
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item!")
        return
    }
    items.push(value) //In JavaScript, the push() method is used to add one or more elements to the end of an array. 
    renderItems()
    input.value = "";
    saveItems()
}
// After this statement executes, the value variable will hold the current value of the input field, and it cannot be reassigned to a different value due to the const keyword.

function removeItem(idx) { 
    items.splice(idx, 1)
    renderItems()
    saveItems()
}
// The splice() method in JavaScript is used to add or remove elements from an array. It can be used to modify the contents of an array by removing existing elements and/or adding new elements in their place. The basic syntax of the splice() method is as follows:

// array.splice(start, deleteCount, item1, item2, ...)

// start: The index at which to start modifying the array. If negative, it will begin from the end of the array. If greater than the length of the array, it will default to the length of the array.
// deleteCount: The number of elements to remove from the array. If set to 0, no elements are removed. If omitted, all elements from start to the end of the array are removed.
// item1, item2, ...: The elements to add to the array at the specified start index.

document.addEventListener("DOMContentLoaded", loadItems)