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
         inputBtn: '.add__btn',
         incomeContainer: '.income__list',
         expensesContainer: '.expenses__list'
     }

    return {
        getinput: () => {
            return {
                type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };
        },
        addListItem: function(obj, type){
            let html, newHtml, element ;
            // Create HTML String with placeholder text
            if (type === 'inc'){
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function() {
            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach( (current, index, array) => {
                current.value = "";
            });

            fieldsArr[0].focus();
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

    var updateBudget = () => {
        // 1. Calculate the budget

        // 2. Return the budget

        // 3.Display the budget on the UI  
    }

    const ctrlAddItem = () => {
        let input, newItem;
        // 1. Get the Filed input data
        input = UICtrl.getinput();

        // Condition statment don't allow to appear anything, if there're an Unwanted value
        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {   
            // 2. Add the item to the budget controler
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            
            // 4. Clear the Field
            UICtrl.clearFields();
            
            // 5. Calculate and update Budget
            updateBudget();
        }
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