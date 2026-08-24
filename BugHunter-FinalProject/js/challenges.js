/*
    Bug Hunter - Challenge Database

    Each challenge is stored as a JavaScript object.
    The app will use these objects dynamically based
    on the selected category and difficulty.
*/

const challenges = [

    // ==============================
    // SYNTAX ERRORS
    // ==============================

    {
        id: 1,
        category: "syntax",
        difficulty: "easy",
        title: "Missing Parenthesis",
        code:
`console.log("Hello World";`,
        question: "What is wrong with this code?",
        answers: [
            "The closing parenthesis is missing",
            "console.log cannot display text",
            "The quotation marks are invalid",
            "A variable must be created first"
        ],
        correctAnswer: 0,
        explanation:
            "The console.log() statement needs a closing parenthesis before the semicolon.",
        xpReward: 10
    },

    {
        id: 2,
        category: "syntax",
        difficulty: "medium",
        title: "Broken If Statement",
        code:
`let score = 90;

if score > 80 {
    console.log("Great job!");
}`,
        question: "How should the if statement be fixed?",
        answers: [
            "Remove the curly braces",
            "Put the condition inside parentheses",
            "Change let to const",
            "Remove the comparison operator"
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript if conditions must be placed inside parentheses, such as if (score > 80).",
        xpReward: 20
    },

    {
        id: 3,
        category: "syntax",
        difficulty: "hard",
        title: "Function Declaration Error",
        code:
`function greet(name {
    return "Hello " + name;
}`,
        question: "Which change fixes the function?",
        answers: [
            "Add a closing parenthesis after name",
            "Remove the return keyword",
            "Replace function with let",
            "Remove the curly braces"
        ],
        correctAnswer: 0,
        explanation:
            "The parameter list must close with a parenthesis: function greet(name).",
        xpReward: 30
    },


    // ==============================
    // VARIABLES
    // ==============================

    {
        id: 4,
        category: "variables",
        difficulty: "easy",
        title: "Wrong Variable Name",
        code:
`let playerScore = 100;

console.log(playerscore);`,
        question: "Why does this code fail?",
        answers: [
            "JavaScript variables cannot contain uppercase letters",
            "The variable name uses different capitalization",
            "console.log cannot display numbers",
            "let should be changed to var"
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript is case-sensitive. playerScore and playerscore are different variable names.",
        xpReward: 10
    },
{
    id: 19,
    category: "variables",
    difficulty: "easy",
    title: "Undefined Variable",
    code:
`let score = 50;

console.log(points);`,
    question: "Why does this code produce an error?",
    answers: [
        "points was never declared",
        "score cannot contain a number",
        "console.log needs two values",
        "let cannot create variables"
    ],
    correctAnswer: 0,
    explanation:
        "The variable score exists, but the code tries to display points, which was never declared.",
    xpReward: 10
},

{
    id: 20,
    category: "variables",
    difficulty: "easy",
    title: "Variable Typo",
    code:
`let username = "Hunter";

console.log(userName);`,
    question: "What causes this error?",
    answers: [
        "The capitalization of the variable name does not match",
        "Strings cannot be stored in variables",
        "username must use const",
        "console.log cannot display strings"
    ],
    correctAnswer: 0,
    explanation:
        "JavaScript is case-sensitive. username and userName are treated as different variables.",
    xpReward: 10
},
    {
        id: 5,
        category: "variables",
        difficulty: "medium",
        title: "Changing a Constant",
        code:
`const lives = 3;

lives = 2;`,
        question: "What is causing the error?",
        answers: [
            "A const variable cannot be reassigned",
            "Numbers cannot be stored in const",
            "The value must be a string",
            "The variable name is invalid"
        ],
        correctAnswer: 0,
        explanation:
            "A variable declared with const cannot be reassigned after it is created.",
        xpReward: 20
    },

    {
        id: 6,
        category: "variables",
        difficulty: "hard",
        title: "Scope Problem",
        code:
`function createScore() {
    let score = 50;
}

console.log(score);`,
        question: "Why is score not available?",
        answers: [
            "score only exists inside the function",
            "let variables cannot store numbers",
            "console.log must be inside an if statement",
            "Functions cannot contain variables"
        ],
        correctAnswer: 0,
        explanation:
            "score has function scope and cannot be accessed outside createScore().",
        xpReward: 30
    },


    // ==============================
    // FUNCTIONS
    // ==============================

    {
        id: 7,
        category: "functions",
        difficulty: "easy",
        title: "Wrong Function Call",
        code:
`function sayHello() {
    console.log("Hello!");
}

sayhello();`,
        question: "Why does the function call fail?",
        answers: [
            "The function needs a parameter",
            "The function name uses different capitalization",
            "console.log cannot be used inside functions",
            "Functions cannot be called after they are created"
        ],
        correctAnswer: 1,
        explanation:
            "JavaScript is case-sensitive. sayHello() and sayhello() are different names.",
        xpReward: 10
    },

    {
        id: 8,
        category: "functions",
        difficulty: "medium",
        title: "Missing Return",
        code:
`function addNumbers(a, b) {
    let total = a + b;
}

let answer = addNumbers(5, 5);

console.log(answer);`,
        question: "Why does answer become undefined?",
        answers: [
            "The function needs a return statement",
            "The function has too many parameters",
            "let cannot store function results",
            "The numbers must be strings"
        ],
        correctAnswer: 0,
        explanation:
            "The function calculates total but never returns it. Add return total;",
        xpReward: 20
    },

    {
        id: 9,
        category: "functions",
        difficulty: "hard",
        title: "Parameter Mix-Up",
        code:
`function divide(a, b) {
    return b / a;
}

console.log(divide(10, 2));`,
        question: "The programmer expected 5. What is the logic error?",
        answers: [
            "The parameters are divided in the wrong order",
            "return cannot be used with division",
            "The function needs three parameters",
            "console.log changes the result"
        ],
        correctAnswer: 0,
        explanation:
            "The function returns b / a instead of a / b.",
        xpReward: 30
    },


    // ==============================
    // ARRAYS
    // ==============================

    {
        id: 10,
        category: "arrays",
        difficulty: "easy",
        title: "Wrong Index",
        code:
`let weapons = ["Sword", "Bow", "Staff"];

console.log(weapons[3]);`,
        question: "Why does this display undefined?",
        answers: [
            "Arrays begin at index 0",
            "Arrays cannot contain strings",
            "The array needs four commas",
            "console.log cannot access arrays"
        ],
        correctAnswer: 0,
        explanation:
            "The array has indexes 0, 1, and 2. Index 3 does not exist.",
        xpReward: 10
    },

    {
        id: 11,
        category: "arrays",
        difficulty: "medium",
        title: "Wrong Array Method",
        code:
`let items = ["Potion", "Shield"];

items.push = "Sword";

console.log(items);`,
        question: "How should Sword be added?",
        answers: [
            `items.push("Sword");`,
            `items.add("Sword");`,
            `items[push] = "Sword";`,
            `push(items, "Sword");`
        ],
        correctAnswer: 0,
        explanation:
            "push() is a method and must be called with parentheses.",
        xpReward: 20
    },

    {
        id: 12,
        category: "arrays",
        difficulty: "hard",
        title: "Loop Goes Too Far",
        code:
`let numbers = [10, 20, 30];

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}`,
        question: "What causes the final undefined value?",
        answers: [
            "The loop should use i < numbers.length",
            "The array needs another number",
            "i should begin at 1",
            "The loop cannot use length"
        ],
        correctAnswer: 0,
        explanation:
            "Using <= allows i to reach numbers.length, which is one index past the end of the array.",
        xpReward: 30
    },


    // ==============================
    // OBJECTS
    // ==============================

    {
        id: 13,
        category: "objects",
        difficulty: "easy",
        title: "Wrong Property",
        code:
`let player = {
    name: "Alex",
    health: 100
};

console.log(player.hp);`,
        question: "Why does this display undefined?",
        answers: [
            "The object property is named health, not hp",
            "Objects cannot store numbers",
            "Dot notation cannot be used",
            "The player object needs an array"
        ],
        correctAnswer: 0,
        explanation:
            "The object contains a health property, but the code tries to access hp.",
        xpReward: 10
    },

    {
        id: 14,
        category: "objects",
        difficulty: "medium",
        title: "Missing this Keyword",
        code:
`let player = {
    name: "Alex",

    introduce: function() {
        return "My name is " + name;
    }
};`,
        question: "How should the name property be accessed?",
        answers: [
            "this.name",
            "player[name]",
            "name.player",
            "object.name"
        ],
        correctAnswer: 0,
        explanation:
            "Inside the object's method, this.name refers to the object's own name property.",
        xpReward: 20
    },

    {
        id: 15,
        category: "objects",
        difficulty: "hard",
        title: "Nested Object Error",
        code:
`let account = {
    profile: {
        username: "BugHunter"
    }
};

console.log(account.username);`,
        question: "What is the correct way to access the username?",
        answers: [
            "account.profile.username",
            "account.username.profile",
            "profile.account.username",
            "username.account"
        ],
        correctAnswer: 0,
        explanation:
            "username is nested inside the profile object, so use account.profile.username.",
        xpReward: 30
    },


    // ==============================
    // DOM BUGS
    // ==============================

    {
        id: 16,
        category: "dom",
        difficulty: "easy",
        title: "Wrong Element ID",
        code:
`<button id="startButton">Start</button>

<script>
document.getElementById("startBtn")
    .addEventListener("click", startGame);
</script>`,
        question: "Why is the button not found?",
        answers: [
            "The JavaScript uses the wrong element ID",
            "Buttons cannot use IDs",
            "addEventListener only works with forms",
            "The button needs a value attribute"
        ],
        correctAnswer: 0,
        explanation:
            "The HTML ID is startButton, but JavaScript searches for startBtn.",
        xpReward: 10
    },

    {
        id: 17,
        category: "dom",
        difficulty: "medium",
        title: "Wrong Event Name",
        code:
`button.addEventListener("clicked", function() {
    console.log("Button pressed");
});`,
        question: "What should the event name be?",
        answers: [
            "click",
            "pressed",
            "button",
            "onclicked"
        ],
        correctAnswer: 0,
        explanation:
            "The standard mouse event is called click.",
        xpReward: 20
    },

    {
        id: 18,
        category: "dom",
        difficulty: "hard",
        title: "Script Runs Too Early",
        code:
`<script src="app.js"></script>

<button id="playButton">Play</button>`,
        question: "What can happen if app.js immediately looks for playButton?",
        answers: [
            "The button may not exist in the DOM yet",
            "The button automatically disappears",
            "JavaScript cannot work with buttons",
            "The script converts the button into text"
        ],
        correctAnswer: 0,
        explanation:
            "If JavaScript runs before the button is parsed, getElementById may return null. Loading the script at the end of body or using defer solves this.",
        xpReward: 30
    }

,

// ======================================================
// ADDITIONAL SYNTAX CHALLENGES
// ======================================================

{
    id: 19,
    category: "syntax",
    difficulty: "easy",
    title: "Missing Quote",
    code:
`let message = "Hello World;

console.log(message);`,
    question: "What is missing from this code?",
    answers: [
        "A closing quotation mark",
        "A second variable",
        "An extra console.log",
        "A function"
    ],
    correctAnswer: 0,
    explanation:
        "The string begins with a quotation mark but never closes it.",
    xpReward: 10
},

{
    id: 20,
    category: "syntax",
    difficulty: "easy",
    title: "Missing Curly Brace",
    code:
`if (score > 50) {
    console.log("Winner!");`,
    question: "What syntax error is present?",
    answers: [
        "The closing curly brace is missing",
        "score cannot be compared",
        "console.log needs two arguments",
        "if cannot use numbers"
    ],
    correctAnswer: 0,
    explanation:
        "The if statement opens a curly brace but never closes it.",
    xpReward: 10
},

{
    id: 21,
    category: "syntax",
    difficulty: "medium",
    title: "Else Statement Error",
    code:
`if (score >= 60) {
    console.log("Pass");
}
else (score < 60) {
    console.log("Fail");
}`,
    question: "What is wrong with the else statement?",
    answers: [
        "else does not take a condition",
        "else must come before if",
        "score cannot be compared twice",
        "console.log cannot be inside else"
    ],
    correctAnswer: 0,
    explanation:
        "A normal else statement does not contain a condition. Use else or else if.",
    xpReward: 20
},

{
    id: 22,
    category: "syntax",
    difficulty: "medium",
    title: "Malformed For Loop",
    code:
`for let i = 0; i < 5; i++ {
    console.log(i);
}`,
    question: "What needs to be added to the for loop?",
    answers: [
        "Parentheses around the loop conditions",
        "A return statement",
        "An array",
        "A function name"
    ],
    correctAnswer: 0,
    explanation:
        "A JavaScript for loop requires parentheses around its initialization, condition, and update.",
    xpReward: 20
},

{
    id: 23,
    category: "syntax",
    difficulty: "hard",
    title: "Object Syntax Error",
    code:
`const player = {
    name: "Alex"
    score: 100
};`,
    question: "What is missing between the object properties?",
    answers: [
        "A comma",
        "A semicolon",
        "A function",
        "A bracket"
    ],
    correctAnswer: 0,
    explanation:
        "Object properties must be separated with commas.",
    xpReward: 30
},

{
    id: 24,
    category: "syntax",
    difficulty: "hard",
    title: "Arrow Function Error",
    code:
`const double = (number) = {
    return number * 2;
};`,
    question: "What should replace the single equals sign after the parameter?",
    answers: [
        "=>",
        "==",
        "===",
        "<="
    ],
    correctAnswer: 0,
    explanation:
        "Arrow functions use the => operator.",
    xpReward: 30
},


// ======================================================
// ADDITIONAL VARIABLE CHALLENGES
// ======================================================

{
    id: 25,
    category: "variables",
    difficulty: "easy",
    title: "Undefined Variable",
    code:
`let score = 50;

console.log(points);`,
    question: "Why does this code fail?",
    answers: [
        "points was never declared",
        "score must be a string",
        "console.log cannot show numbers",
        "let cannot store numbers"
    ],
    correctAnswer: 0,
    explanation:
        "The code declares score but attempts to use a different variable named points.",
    xpReward: 10
},

{
    id: 26,
    category: "variables",
    difficulty: "easy",
    title: "Name Mismatch",
    code:
`let username = "Hunter";

console.log(userName);`,
    question: "What causes the error?",
    answers: [
        "The capitalization does not match",
        "Strings cannot be variables",
        "username needs parentheses",
        "console.log only works with numbers"
    ],
    correctAnswer: 0,
    explanation:
        "JavaScript is case-sensitive. username and userName are different names.",
    xpReward: 10
},

{
    id: 27,
    category: "variables",
    difficulty: "medium",
    title: "Block Scope Bug",
    code:
`if (true) {
    let weapon = "Sword";
}

console.log(weapon);`,
    question: "Why can't weapon be accessed?",
    answers: [
        "let is block-scoped",
        "Strings cannot be inside if statements",
        "weapon must use const",
        "console.log cannot access variables"
    ],
    correctAnswer: 0,
    explanation:
        "A let variable declared inside a block cannot be accessed outside that block.",
    xpReward: 20
},

{
    id: 28,
    category: "variables",
    difficulty: "medium",
    title: "Redeclared Constant",
    code:
`const maxHealth = 100;
const maxHealth = 200;`,
    question: "Why does this produce an error?",
    answers: [
        "The same const variable is declared twice",
        "const cannot store numbers",
        "Variable names cannot contain capital letters",
        "The values must match"
    ],
    correctAnswer: 0,
    explanation:
        "A const identifier cannot be declared twice in the same scope.",
    xpReward: 20
},

{
    id: 29,
    category: "variables",
    difficulty: "hard",
    title: "Hoisting Problem",
    code:
`console.log(score);

let score = 100;`,
    question: "Why does this fail?",
    answers: [
        "score is accessed before initialization",
        "let must be inside a function",
        "console.log must come last",
        "100 must be written as a string"
    ],
    correctAnswer: 0,
    explanation:
        "Variables declared with let cannot be accessed before their declaration is initialized.",
    xpReward: 30
},

{
    id: 30,
    category: "variables",
    difficulty: "hard",
    title: "Wrong Data Type",
    code:
`let score = "50";

console.log(score + 10);`,
    question: "Why does this produce 5010 instead of 60?",
    answers: [
        "score is a string",
        "console.log performs multiplication",
        "10 must be a string",
        "let cannot store numbers"
    ],
    correctAnswer: 0,
    explanation:
        "Because score contains a string, + performs string concatenation instead of numeric addition.",
    xpReward: 30
},


// ======================================================
// ADDITIONAL FUNCTION CHALLENGES
// ======================================================

{
    id: 31,
    category: "functions",
    difficulty: "easy",
    title: "Function Never Called",
    code:
`function startGame() {
    console.log("Game Started");
}`,
    question: "Why doesn't anything display?",
    answers: [
        "The function is never called",
        "Functions cannot use console.log",
        "The function needs a parameter",
        "startGame must be a variable"
    ],
    correctAnswer: 0,
    explanation:
        "Defining a function does not run it. You must call startGame().",
    xpReward: 10
},

{
    id: 32,
    category: "functions",
    difficulty: "easy",
    title: "Missing Argument",
    code:
`function greet(name) {
    console.log("Hello " + name);
}

greet();`,
    question: "Why does the output contain undefined?",
    answers: [
        "No argument was passed to name",
        "Functions cannot accept strings",
        "console.log is incorrect",
        "The function needs return"
    ],
    correctAnswer: 0,
    explanation:
        "The parameter name receives undefined because no argument was supplied.",
    xpReward: 10
},

{
    id: 33,
    category: "functions",
    difficulty: "medium",
    title: "Wrong Return Value",
    code:
`function multiply(a, b) {
    let answer = a * b;
    return a;
}

console.log(multiply(4, 5));`,
    question: "Why does this display 4 instead of 20?",
    answers: [
        "The function returns a instead of answer",
        "Multiplication cannot be used in functions",
        "b is undefined",
        "console.log changes the result"
    ],
    correctAnswer: 0,
    explanation:
        "The calculated value is stored in answer, but the function returns a.",
    xpReward: 20
},

{
    id: 34,
    category: "functions",
    difficulty: "medium",
    title: "Callback Not Executed",
    code:
`function runTask(callback) {
    callback;
}

runTask(function() {
    console.log("Running!");
});`,
    question: "Why is the callback not executed?",
    answers: [
        "callback needs parentheses",
        "Callbacks cannot use functions",
        "runTask needs return",
        "console.log cannot be used"
    ],
    correctAnswer: 0,
    explanation:
        "Writing callback only references the function. callback() actually executes it.",
    xpReward: 20
},

{
    id: 35,
    category: "functions",
    difficulty: "hard",
    title: "Early Return",
    code:
`function checkScore(score) {
    return;

    if (score > 50) {
        return "Pass";
    }
}`,
    question: "Why will the function never return Pass?",
    answers: [
        "The first return exits the function immediately",
        "The if statement must come first in JavaScript",
        "score cannot be passed to functions",
        "return cannot be inside if"
    ],
    correctAnswer: 0,
    explanation:
        "The first return ends the function before the if statement is reached.",
    xpReward: 30
},

{
    id: 36,
    category: "functions",
    difficulty: "hard",
    title: "Arrow Function Return",
    code:
`const double = number => {
    number * 2;
};

console.log(double(5));`,
    question: "Why does this return undefined?",
    answers: [
        "The function is missing return",
        "Arrow functions cannot multiply",
        "number needs parentheses",
        "const cannot store functions"
    ],
    correctAnswer: 0,
    explanation:
        "With curly braces, an arrow function must explicitly use return.",
    xpReward: 30
},


// ======================================================
// ADDITIONAL ARRAY CHALLENGES
// ======================================================

{
    id: 37,
    category: "arrays",
    difficulty: "easy",
    title: "First Item Bug",
    code:
`let colors = ["Red", "Blue", "Green"];

console.log(colors[1]);`,
    question: "The programmer wanted Red. What index should be used?",
    answers: [
        "0",
        "1",
        "2",
        "3"
    ],
    correctAnswer: 0,
    explanation:
        "Array indexes begin at 0, so the first item is colors[0].",
    xpReward: 10
},

{
    id: 38,
    category: "arrays",
    difficulty: "easy",
    title: "Array Length",
    code:
`let items = ["Potion", "Sword", "Shield"];

console.log(items.length - 1);`,
    question: "The programmer wants the total number of items. What should be used?",
    answers: [
        "items.length",
        "items.length + 1",
        "items[3]",
        "items.size"
    ],
    correctAnswer: 0,
    explanation:
        "length already returns the number of elements in the array.",
    xpReward: 10
},

{
    id: 39,
    category: "arrays",
    difficulty: "medium",
    title: "Pop Mistake",
    code:
`let inventory = ["Sword", "Bow", "Potion"];

inventory.pop;

console.log(inventory);`,
    question: "Why isn't the final item removed?",
    answers: [
        "pop needs parentheses",
        "pop only works on numbers",
        "The array needs const",
        "pop removes the first item"
    ],
    correctAnswer: 0,
    explanation:
        "Array methods must be called. Use inventory.pop().",
    xpReward: 20
},

{
    id: 40,
    category: "arrays",
    difficulty: "medium",
    title: "ForEach Parameter Bug",
    code:
`let numbers = [1, 2, 3];

numbers.forEach(function() {
    console.log(number);
});`,
    question: "Why is number undefined?",
    answers: [
        "The callback does not declare a number parameter",
        "forEach cannot print values",
        "The array must contain strings",
        "The function needs return"
    ],
    correctAnswer: 0,
    explanation:
        "The callback needs a parameter such as function(number) to receive each array value.",
    xpReward: 20
},

{
    id: 41,
    category: "arrays",
    difficulty: "hard",
    title: "Map Return Bug",
    code:
`let numbers = [1, 2, 3];

let doubled = numbers.map(function(number) {
    number * 2;
});

console.log(doubled);`,
    question: "Why does doubled contain undefined values?",
    answers: [
        "The callback is missing return",
        "map cannot work with numbers",
        "numbers must be const",
        "map changes numbers into strings"
    ],
    correctAnswer: 0,
    explanation:
        "map creates its output from the callback's returned values.",
    xpReward: 30
},

{
    id: 42,
    category: "arrays",
    difficulty: "hard",
    title: "Wrong Sort Result",
    code:
`let numbers = [2, 10, 30, 5];

numbers.sort();

console.log(numbers);`,
    question: "Why may this not sort numerically as expected?",
    answers: [
        "Default sort compares values as strings",
        "Arrays cannot sort numbers",
        "sort only works backward",
        "The array needs a loop"
    ],
    correctAnswer: 0,
    explanation:
        "For numeric sorting, use a comparison function such as numbers.sort((a, b) => a - b).",
    xpReward: 30
},


// ======================================================
// ADDITIONAL OBJECT CHALLENGES
// ======================================================

{
    id: 43,
    category: "objects",
    difficulty: "easy",
    title: "Missing Property",
    code:
`const character = {
    name: "Rin",
    level: 4
};

console.log(character.health);`,
    question: "Why is undefined displayed?",
    answers: [
        "health does not exist on the object",
        "Objects cannot store levels",
        "Dot notation is invalid",
        "character must be an array"
    ],
    correctAnswer: 0,
    explanation:
        "The character object has name and level properties but no health property.",
    xpReward: 10
},

{
    id: 44,
    category: "objects",
    difficulty: "easy",
    title: "Bracket Notation",
    code:
`const player = {
    score: 500
};

console.log(player["points"]);`,
    question: "Why is the result undefined?",
    answers: [
        "The property is named score, not points",
        "Bracket notation cannot access objects",
        "Numbers cannot be object properties",
        "player must use let"
    ],
    correctAnswer: 0,
    explanation:
        "The property key must match exactly. Use player['score'].",
    xpReward: 10
},

{
    id: 45,
    category: "objects",
    difficulty: "medium",
    title: "Method Call Bug",
    code:
`const player = {
    greet: function() {
        return "Hello!";
    }
};

console.log(player.greet);`,
    question: "Why is the function itself displayed instead of Hello?",
    answers: [
        "greet needs parentheses",
        "Objects cannot contain functions",
        "console.log needs return",
        "The method must be outside the object"
    ],
    correctAnswer: 0,
    explanation:
        "player.greet references the function. player.greet() calls it.",
    xpReward: 20
},

{
    id: 46,
    category: "objects",
    difficulty: "medium",
    title: "Wrong this Context",
    code:
`const hero = {
    name: "Nova",
    showName: function() {
        return name;
    }
};`,
    question: "How should the method access the object's name?",
    answers: [
        "this.name",
        "name.this",
        "hero[name]",
        "object.name"
    ],
    correctAnswer: 0,
    explanation:
        "Inside an object method, this.name accesses the current object's name property.",
    xpReward: 20
},

{
    id: 47,
    category: "objects",
    difficulty: "hard",
    title: "Nested Property Bug",
    code:
`const game = {
    player: {
        stats: {
            score: 900
        }
    }
};

console.log(game.player.score);`,
    question: "What is the correct property path?",
    answers: [
        "game.player.stats.score",
        "game.stats.score",
        "game.score.player",
        "player.game.score"
    ],
    correctAnswer: 0,
    explanation:
        "score is located inside game.player.stats.",
    xpReward: 30
},

{
    id: 48,
    category: "objects",
    difficulty: "hard",
    title: "Object Reference",
    code:
`const player1 = {
    score: 100
};

const player2 = player1;

player2.score = 500;

console.log(player1.score);`,
    question: "Why does player1.score become 500?",
    answers: [
        "Both variables reference the same object",
        "const automatically copies values",
        "Objects cannot contain separate scores",
        "JavaScript merges all objects"
    ],
    correctAnswer: 0,
    explanation:
        "Objects are reference values. player1 and player2 point to the same object.",
    xpReward: 30
},


// ======================================================
// ADDITIONAL DOM CHALLENGES
// ======================================================

{
    id: 49,
    category: "dom",
    difficulty: "easy",
    title: "Wrong Selector",
    code:
`<p id="message">Hello</p>

<script>
document.getElementById("text").textContent = "Welcome";
</script>`,
    question: "Why isn't the paragraph updated?",
    answers: [
        "The JavaScript uses the wrong ID",
        "Paragraphs cannot be changed",
        "textContent only works with buttons",
        "The paragraph needs a class"
    ],
    correctAnswer: 0,
    explanation:
        "The HTML element uses the ID message, but JavaScript searches for text.",
    xpReward: 10
},

{
    id: 50,
    category: "dom",
    difficulty: "easy",
    title: "Missing Click Listener",
    code:
`const button = document.getElementById("startButton");

button.addEventListener("click");`,
    question: "What is missing from addEventListener?",
    answers: [
        "A callback function",
        "Another button",
        "An ID",
        "A CSS class"
    ],
    correctAnswer: 0,
    explanation:
        "addEventListener needs both an event type and a function to run.",
    xpReward: 10
},

{
    id: 51,
    category: "dom",
    difficulty: "medium",
    title: "querySelector Bug",
    code:
`<button class="playButton">Play</button>

<script>
const button =
    document.querySelector("playButton");
</script>`,
    question: "What selector should be used?",
    answers: [
        ".playButton",
        "#playButton",
        "button.playButton#",
        "@playButton"
    ],
    correctAnswer: 0,
    explanation:
        "Classes are selected with a period, so use document.querySelector('.playButton').",
    xpReward: 20
},

{
    id: 52,
    category: "dom",
    difficulty: "medium",
    title: "Wrong Property",
    code:
`const heading =
    document.getElementById("title");

heading.text = "Bug Hunter";`,
    question: "Which property should be used to update the text?",
    answers: [
        "textContent",
        "valueText",
        "content",
        "titleText"
    ],
    correctAnswer: 0,
    explanation:
        "textContent is a standard DOM property for changing an element's text.",
    xpReward: 20
},

{
    id: 53,
    category: "dom",
    difficulty: "hard",
    title: "Null Element",
    code:
`const score =
    document.getElementById("score");

score.textContent = "100";`,
    question: "What happens if no element with id score exists?",
    answers: [
        "score is null and textContent causes an error",
        "JavaScript creates the element automatically",
        "score becomes zero",
        "The browser ignores the entire script"
    ],
    correctAnswer: 0,
    explanation:
        "getElementById returns null when no matching element exists.",
    xpReward: 30
},

{
    id: 54,
    category: "dom",
    difficulty: "hard",
    title: "Prevent Form Reload",
    code:
`form.addEventListener("submit", function(event) {
    savePlayer();
});`,
    question: "The page reloads after submitting. What should be added?",
    answers: [
        "event.preventDefault();",
        "event.stopPage();",
        "return.reload();",
        "form.cancel();"
    ],
    correctAnswer: 0,
    explanation:
        "event.preventDefault() stops the browser's normal form submission behavior.",
    xpReward: 30
}

];