const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process'); 

const rl = readline.createInterface({ input, output });

const items = []

// Function to display and handle the main menu
function mainMenu() {
    rl.question('\n 1. Add item \n 2. View items \n 3. Delete item \n 4. Clear All \n 5. Update Item \n 6. Exit \n\n > Pick Number: ', (answer) => {
    
        if (answer == '1') {
            rl.question('Which item do you want to store? ', (item) => {
                // Convert input to lowercase so deletion works case-insensitively
                items.push(item.toLocaleLowerCase())
                mainMenu()
            });
        };

        if (answer == '2') {
            if (items.length == 0) {
                console.log('No items available')
            } else {
                items.forEach((element) => console.log(element));
            }
            mainMenu()
        };

        if (answer == '3') {
            rl.question('Which item do you want to remove? ', (remove) => {
                // Check if the item exists in the list before trying to remove it
                let index = items.indexOf(remove.toLowerCase())
                if (index !== -1) {
                    items.splice(index, 1)
                    console.log('Item removed successfully')
                } else {
                    console.log('Item not found');  
                }
                mainMenu()
            });
        };

        if (answer == '4') {
            // Setting the array's length to 0 to remove all entries
            items.length = 0;
            console.log('All Items have been removed!')
            mainMenu()
        }

        if (answer == '5') {
            rl.question('Which item do you want to update? ', (update) => {
                let index = items.indexOf(update.toLowerCase())
                if (index !== -1) {
                    rl.question('What is the new item? ', (new_item) => {
                       items[index] = new_item
                       mainMenu()
                    })
                } else {
                    console.log('Item not found');
                }
            });
        };

        if (answer == '6') {
            rl.close();
        }
    });
};
mainMenu()


