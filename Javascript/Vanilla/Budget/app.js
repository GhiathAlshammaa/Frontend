// BUDGET CONTROLLER
const budgetController = (() => {
    // Some Code
    let Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let allExpenses = [];
    let allIncoms = [];
    let totalExpenses = 0;

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: (type, des, val) => {
            let newItem, ID;
            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;
            } else {
                ID = 0 ;
            }
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element 
            return newItem;
        },
        testing: () => {
            console.log(data);
        }
    };
})();

// UI CONTROLLER
const UIController = (() => {

     // Center place to keeping all the class name 
     const DOMstring = {
         inputType: '.add__type',
         inputDescription: '.add__description',
         inputValue:'.add__value',
         inputBtn: '.add__btn'
     }

    return {
        getinput: () => {
            return {
                type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: document.querySelector(DOMstring.inputValue).value
            };
        },
        getDOMstring: () => { // This Function to Expose the DOMstring (className) as public access
            return DOMstring;
        }
    };
})();

// GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

    const setupEventListeners = () => {
        const DOM = UICtrl.getDOMstring();// to give access to the className of input button

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', ()=>{
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });    
    };

    const ctrlAddItem = () => {
        let input, newItem;
        // 1. Get the Filed input data
        input = UICtrl.getinput();

        // 2. Add the item to the budget controler
        budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5.Display the budget on the UI   
    };
    return {
        init: () => {
            console.log('Application has started');
            setupEventListeners(); 
        }
    };

})(budgetController, UIController);
// When begining the Project will directly call this intilization Function to execute all necessary stuff
controller.init();