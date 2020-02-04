const { fruits } = require("./fruits");
const { functions } = require("./functions");

const readline = require("readline");
const ordersList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const howQuantity = (fruit) => {
    rl.question(`Enter the Quantity you want of the ${fruit}:`, quantity => {
        const checkIfTheFruitExist = ordersList.some((item) => item.fruit === fruit);
        const idOfFruit = fruits.filter(x => x.type === fruit);
        const fruitId = idOfFruit[0].id;
        !checkIfTheFruitExist ? ordersList.push({fruit, quantity, fruitId}) : console.log('Error!, you have ordered same the fruit already');
        showFruits();
    });
}

const showFruits = () => {
    fruits.map((x, index) => console.log(`${index}] ${x.type}`));

    rl.question("Choose of the Fruits Menu?\nNote: if you want go back, just enter back \n", answer => {
        switch (answer) {
            case "0":
                howQuantity("Bananas");
            break;
            case "1":
                howQuantity("Red Apple");
            break;
            case "2":
                howQuantity("Green Apple");
            break;
            case "3":
                howQuantity("Melons");
            break;
            case "back":
                showfunctions();
            break;
            default : 
                console.log("This's invalid number, try again");
                showFruits();
        }
      });
}

const welcomePage = () => {	
	const welcomeMsg =  "Welcome in Shopping Cart APP";    
    console.log(welcomeMsg);
}

const showfunctions = () => {

    functions.map((x,index) => console.log(`${index}] ${x}`));

    rl.question("Choose of the Menu? ", answer => {
        switch (answer) {
            case "0":
                addOrder();
            break;
            case "1":
                viewOrdersList();
            break;
            case "2":
                removeOfOrder();
            break;
            default : 
                console.log("This's invalid number, try again");
                showfunctions();
        }
      });
}

const addOrder = () => {
    console.log("Choose of these Fruits& specific the quantity: ");
    showFruits();
}

const viewOrdersList = () => {
    console.log("View");
    ordersList.map((x, index) => console.log(`Fruit: ${x.fruit} - Quantity: ${x.quantity}`));
    rl.question("Here all the Fruits in Shopping Cart,\nNote: if you want go back, just enter back \n", answer => {
        if(answer === 'back'){
            showfunctions();
        }
    });
}

const removeOfOrder = () => {
    if (ordersList.length > 0){
        ordersList.map((x, index) => console.log(`${index}] ${x.fruit}`));
        rl.question("Which a Fruit?\nNote: if you want go back, just enter back \n", answer => {
            if (answer === 'back'){
                showfunctions();
            }
            const getItem = ordersList.filter((element, index) => index == answer);
            console.log("getItem: " + JSON.stringify(getItem));
            
            const nameItem = getItem[0].fruit;
            const idItem = getItem[0].fruitId;
            rl.question(`what is the new quantity value of ${nameItem} ?`, qunatity => {
                    ordersList.map(x => {if (x.fruitId === idItem) {x.quantity = qunatity} });
                    viewOrdersList();
            });
        });
    } else {
        console.log('The shopping Cart is empty!, firstly you should add some fruits');
        showfunctions();
    }
}

// Main section
welcomePage();
showfunctions();
