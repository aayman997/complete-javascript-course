/*************** Budget Controller ***************/

const budgetController = (function () {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let calculateTotal = function (type) {
        let sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum = sum + cur.value;
        });
        data.totals[type] = sum;
    };
    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1
    };
    return {
        addItems: function (type, des, val) {
            let newItem, ID;
            //  [1 2 3 4 5], Next ID = 6
            //  [1 2 4 6 8], Next ID = 9
            //  ID = last ID + 1
            //  Create New ID
            if ( data.allItems[type].length > 0 ) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //  Create New Item Based On 'inc' Or 'exp' Type
            if ( type === 'exp' ) {
                newItem = new Expense(ID, des, val);
            } else if ( type === 'inc' ) {
                newItem = new Income(ID, des, val);
            }
            //  Push It Into Data Structure
            data.allItems[type].push(newItem);

            //  Return The New Element
            return newItem;
        },
        deleteItem: function (type, id) {
            let ids, index;
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if ( index !== -1 ) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function () {
            //  1.Calculate The Income And Expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //  2.Calculate The Budget = Income - Expenses
            data.budget = data.totals.inc - data.totals.exp;
            //  Calculate The Percentage Of Income That We Spent
            if ( data.totals.inc > 0 ) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function () {
            console.log(data);
        }
    };
})();

/*************** UI Controller ***************/
const UIController = (function () {
    const DOMStrings = {
        inputType: `.add__type`,
        inputDescription: `.add__description`,
        inputValue: `.add__value`,
        inputBtn: `.add__btn`,
        incomeContainer: `.income__list`,
        expensesContainer: `.expenses__list`,
        budgetLabel: `.budget__value`,
        incomeLabel: `.budget__income--value`,
        expenseLabel: `.budget__expenses--value`,
        percentageLabel: `.budget__expenses--percentage`,
        container: `.container`
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  //  Will Be Inc Or Exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        addListItem: function (obj, type) {
            let html, element;
            //  Create HTML String With Placeholder Text
            //  Replace The Placeholder Text
            if ( type === 'inc' ) {
                element = DOMStrings.incomeContainer;
                html =
                    `<div class='item clearfix' id='inc-${obj.id}'>
                        <div class='item__description'>${obj.description}</div>
                        <div class='right clearfix'>
                            <div class='item__value'>${obj.value}</div>
                            <div class='item__delete'>
                                <button class='item__delete--btn'>
                                    <i class='ion-ios-close-outline'></i>
                                </button>
                            </div>
                        </div>
                    </div>`;
            } else if ( type === 'exp' ) {
                element = DOMStrings.expensesContainer;
                html =
                    `<div class='item clearfix' id='exp-${obj.id}'>
                        <div class='item__description'>${obj.description}</div>
                        <div class='right clearfix'>
                            <div class='item__value'>-${obj.value}</div>
                            <div class='item__percentage'>21%</div>
                            <div class='item__delete'>
                                <button class='item__delete--btn'>
                                    <i class='ion-ios-close-outline'></i>
                                </button>
                            </div>
                        </div>
                    </div>`;
            }
            //  Insert The HTML Into The DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', html);
        },
        deleteListItem: function (selectorID) {
            const el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        clearFields: function () {
            let fields, fieldsArray;
            fields = document.querySelectorAll(`${DOMStrings.inputDescription}, ${DOMStrings.inputValue}`);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function (current, index, array) {
                current.value = ``;
            });
            fieldsArray[0].focus();
        },
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
            if ( obj.percentage > 0 ) {
                document.querySelector(DOMStrings.percentageLabel).textContent = `${obj.percentage} %`;
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = `---`;
            }
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    };
})();

/*************** Global App Controller ***************/
const controller = (function (budgetCtrl, UICtrl) {

    const setupEventListeners = function () {
        const DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener(`click`, ctrlAddItem);
        document.addEventListener(`keypress`, function (event) {
            if ( event.key === `Enter` ) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };
    const updateBudget = function () {
        //  1.Calculate The Budget
        budgetCtrl.calculateBudget();
        //  2.Return The Budget
        const budget = budgetCtrl.getBudget();
        //  3.Display The Budget
        UICtrl.displayBudget(budget);
    };
    const ctrlAddItem = function () {
        let input, newItem;
        //  1.Get Filed Input Data
        input = UICtrl.getInput();

        if ( input.description !== `` && !isNaN(input.value) && input.value > 0 ) {
            //  2.Add The Item To The Budget Controller
            newItem = budgetCtrl.addItems(input.type, input.description, input.value);
            //  3.Add The Item To The User Interface
            UICtrl.addListItem(newItem, input.type);
            //  4.Clear The Fields
            UICtrl.clearFields();
            //  5.Calculate And Update Budget
            updateBudget();
        }
    };
    let ctrlDeleteItem = function (event) {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if ( itemID ) {
            //  1.inc-1
            splitID = itemID.split(`-`);
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //  2.Delete The Item From The Data Structure
            budgetCtrl.deleteItem(type, ID);
            //  3.Delete The Item From The User Interface
            UICtrl.deleteListItem(itemID);
            //  4.Update And Show The New Budget
            updateBudget();
        }
    };
    return {
        init: function () {
            console.log(`Started`);
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();















































