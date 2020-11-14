//creates an object to keep track of values
const Calculator = {
    //this displays 0 on the screen
    Display_Value: '0',
    //hold the first operand for any expression, we set it to null for now
    First_Operand: null,
    //checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now
    operator: null,
};

// Modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // Checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false; 
    }  else {
        //Overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This seciton handles decimal points
function Input_Decimal(dot) {
    // Ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // If the Display_Value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator} = Calculator
    // when an operator key is pressed, we conver the current number
    // displayed on the screen to a number and then store result
    // in Calculator.First Operand if it doesn'd already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_second_operand is true,
    // then updates the operator and exits from function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }   else if (operator) { //checks if an operatory already exists
        const Value_Now = First_Operand || 0;
        // if operator already exists, property lookup is performed for the operator
        // in the perform_calculation object and the function that matches the 
        // operator is executed
        const result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        
        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}


const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element
    // that was clicked
    const { target } = event;
    //if the element that was clicked on it not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
        return;
    }
    //ensures that AC clears the numbers from the Calculater
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})