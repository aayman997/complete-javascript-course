/*************** Budget Controller ***************/

const budgetController = (function () {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.precentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if ( totalIncome > 0 ) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.precentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
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
        calculatePercentage: function () {
            /*
             *  a = 20
             *  b = 10
             *  c = 40
             *  income = 100
             *  a = 20 / 100 = 20%
             *  a = 10 / 100 = 10%
             *  a = 40 / 100 = 40%
             * */
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function () {
            return data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        /*  testing: function () {
         console.log(data);
         }*/
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
        container: `.container`,
        expensesPercLabel: `.item__percentage`,
        dateLabel: `.budget__title--month`
    };
    const formatNumber = function (num, type) {
        let numSplit, int, dec;
        /*
         *  + Or - Before Number
         *  Exactly 2 decimal Points
         *  Comma Separating The Thousands
         *  2310.4567 -> + 2,310.46
         *  2000 -> +2,000.00
         * */
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');
        int = numSplit[0];
        if ( int.length > 3 ) {
            int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, int.length)}`;
        }
        dec = numSplit[1];

        return `${(type === `exp` ? `-` : `+`)} ${int}.${dec}`;
    };
    let nodeListForeEach = function (list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
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
                            <div class='item__value'>${formatNumber(obj.value, type)}</div>
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
                            <div class='item__value'>${formatNumber(obj.value, type)}</div>
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
            fieldsArray.forEach(function (current) {
                current.value = ``;
            });
            fieldsArray[0].focus();
        },
        displayBudget: function (obj) {
            let type;
            obj.budget > 0 ? type = `inc` : type = `exp`;
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if ( obj.percentage > 0 ) {
                document.querySelector(DOMStrings.percentageLabel).textContent = `${obj.percentage} %`;
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = `---`;
            }
        },
        displayPercentages: function (percentages) {
            const fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            nodeListForeEach(fields, function (current, index) {
                if ( percentages[index] > 0 ) {
                    current.textContent = `${percentages[index]} %`;
                } else {
                    current.textContent = `---`;
                }
            });
        },
        displayMonth: function () {
            const now = new Date();
            const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
            let year = now.getFullYear();
            let month = now.getMonth();
            document.querySelector(DOMStrings.dateLabel).textContent = `${months[month]} ${year}`;
        },
        changeType: function () {
            let fields = document.querySelectorAll(
                `${DOMStrings.inputType},${DOMStrings.inputDescription},${DOMStrings.inputValue}`
            );
            nodeListForeEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
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
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };
    const updatePercentage = function () {
        //  1.Calculate The Percentage
        budgetCtrl.calculatePercentage();
        //  3.Read Percentage From The Budget Controller
        let percentages = budgetCtrl.getPercentages();
        //  3.Update The UI With The New Percentage
        UICtrl.displayPercentages(percentages);
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
            //  6.Calculate And Update Percentage
            updatePercentage();
        }
    };
    let ctrlDeleteItem = function (event) {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        // console.log(itemID);
        if ( itemID ) {
            //  inc-1
            splitID = itemID.split(`-`);
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //  1.Delete The Item From The Data Structure
            budgetCtrl.deleteItem(type, ID);
            //  3.Delete The Item From The User Interface
            UICtrl.deleteListItem(itemID);
            //  3.Update And Show The New Budget
            updateBudget();
            //  4.Calculate And Update Percentage
            updatePercentage();
        }
    };
    return {
        init: function () {
            console.log(`Started`);
            UICtrl.displayMonth();
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















































