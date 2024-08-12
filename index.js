// Create an empty array called 'todoList' to store your to-do list items.

let todoList = []

// You will be implementing a loop that repeatedly displays possible options, takes user input, and performs actions accordingly. 
// Print "Welcome to the To-Do List App"

console.log("Welcome to the To-Do List App")

// Print the options 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit

todoList.push("1-display the list","2-add new task to end","3-add new task to beginning","4-delete first task","5-exit");

console.log(todoList)

// Define a variable called userChoice and set it to 0


let userChoice = prompt("Pick a number")
userChoice = parseInt(userChoice)

// Create a while loop that runs while the user doesn't type in 5

while (userChoice <= 4){
  if(userChoice === 1){
    console.log(todoList)
  }
  if(userChoice === 2){
  let endTask = prompt("What new task would you like to add to the end of the list?")
    todolist.push(endTask)


  }
  if(userChoice === 3){
  let begTask = prompt("What new task would you like to add to the beginning of the list?")
    todolist.unshift(begtask)
  }
  if(userChoice === 4){
    todoList.shift()
    }

}




// In the loop, use conditionals to match the action to the option 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit









