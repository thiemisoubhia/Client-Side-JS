# COMP1073 — Client-Side JavaScript

## Test 2 Cheat Sheet — Weeks 8–12

> **Test 2:** Practical exam — Weeks 8–12
> Main topics: **Objects, Classes, JSON, Fetch/APIs, DOM, Promises, Browser APIs**
>
> **Allowed during test:** MDN Web Docs, Eloquent JavaScript, code editor.
>
> ### GitHub — Weekly Code
>
> * [Week 08 — Objects & OOP](https://github.com/PriyanshT/26S-JavaScript-02-Week08/tree/main)
> * [Week 09 — Classes & Prototypes](https://github.com/PriyanshT/26S-JavaScript-02-Week09)
> * [Week 10 — JSON & Fetch](https://github.com/PriyanshT/26S-JavaScript-02-Week10)
> * [Week 11 — Web APIs, Fetch & Third-Party APIs](https://github.com/PriyanshT/26S-JavaScript-02-Week11)
> * [Week 12 — Claude API](https://github.com/PriyanshT/26S-JavaScript-02-Week12)

---

# 1. OBJECTS — WEEK 08

## Object literal

```js
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 16,
    gender: "Male",
    interests: ["coding", "reading", "swimming"],

    greeting: function() {
        return `Hello ${this.name.firstName}, how are you?`;
    },

    bio: function() {
        return `The interests of ${this.name.firstName} ${this.name.lastName}, 
        of age: ${this.age}, of gender: ${this.gender}, are ${this.interests}.`;
    }
};
```

## Access properties

### Dot notation

```js
person.age
person.gender
person.name.firstName
person.interests[0]
person.bio()
```

### Bracket notation

```js
person["age"]
person["name"]["firstName"]
person["interests"][0]
```

### Dynamic property

```js
let key = "age";
console.log(person[key]);
```

Useful when the property name comes from a variable.

---

## Change properties

```js
person.age = 80;
person.name.firstName = "John";
```

---

## Add properties

```js
person.eyeColor = "Green";
person.hairColor = "Black";
```

Dynamic:

```js
let key = "hairColor";
let value = "Black";

person[key] = value;
```

---

## Add methods

```js
person.goodbye = function() {
    return `This is ${this.name.firstName} signing off!`;
};
```

Call:

```js
person.goodbye();
```

---

# 2. `this`

`this` refers to the **object that is calling the method**.

```js
let person1 = {
    name: "Person1",

    hello: function() {
        return `Hello ${this.name}`;
    }
};

let person2 = {
    name: "Person2",

    hello: function() {
        return `Hello ${this.name}`;
    }
};

person1.hello(); // Hello Person1
person2.hello(); // Hello Person2
```

### Remember

```js
this.name
```

means:

> "the `name` belonging to the current object."

---

# 3. OBJECT CREATION

## Regular function

```js
function createNewCar(make, model, color) {
    let obj = {};

    obj.make = make;
    obj.model = model;
    obj.color = color;

    return obj;
}

let car1 = createNewCar("Honda", "Civic", "White");
```

---

# 4. CONSTRUCTOR FUNCTIONS

Constructor functions normally start with a **capital letter**.

```js
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}
```

Create objects using `new`:

```js
let car1 = new Car("Honda", "Civic", "White");
let car2 = new Car("Honda", "CRV", "Black");
```

### Key difference

Regular function:

```js
createNewCar(...)
```

Constructor:

```js
new Car(...)
```

`new` creates a new object and makes `this` refer to that object.

---

# 5. OBJECT CONSTRUCTOR

Another way:

```js
let car = new Object();

car.make = "Ram";
car.model = "1500";
car.color = "Green";
```

Add method:

```js
car.description = function() {
    return `A ${this.make} ${this.model} car with ${this.color} color.`;
};
```

---

# 6. OBJECT.CREATE()

Creates a new object whose prototype is another object.

```js
let car2 = Object.create(car1);
```

The new object can inherit properties/methods from `car1`.

Example:

```js
let car3 = Object.create(car2);

car3.color = "Red";
```

---

# 7. WEEK 09 — PROTOTYPES

## Prototype

Every JavaScript object has a prototype.

The prototype acts as a source for inherited:

* properties
* methods

This creates the:

```text
Object
   ↑
Prototype
   ↑
Object instance
```

This is called the **prototype chain**.

---

## Check prototype

Modern:

```js
Object.getPrototypeOf(object);
```

Example:

```js
Object.getPrototypeOf(priyanshCoffee);
```

Older/deprecated:

```js
priyanshCoffee.__proto__
```

---

## Constructor property

```js
priyanshCoffee.constructor
```

Get constructor name:

```js
priyanshCoffee.constructor.name
```

---

## Prototype property

Constructor functions have a:

```js
Coffee.prototype
```

You can add methods to the prototype:

```js
Coffee.prototype.description = function() {
    return `A ${this.size} coffee`;
};
```

All Coffee instances can then use:

```js
priyanshCoffee.description();
robertCoffee.description();
meganCoffee.description();
```

### Why?

They inherit the method through the prototype chain.

---

# 8. CLASSES — WEEK 09

Modern JavaScript OOP uses `class`.

```js
class Coffee {

    size;
    isDecaf;

    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    serveIt() {
        return `A ${this.size} coffee`;
    }
}
```

Create instance:

```js
let coffee = new Coffee("medium", true);
```

Call method:

```js
coffee.serveIt();
```

---

# 9. CLASS CONSTRUCTOR

```js
class Coffee {

    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }
}
```

`constructor()` runs automatically when using:

```js
new Coffee(...)
```

Example:

```js
let coffee = new Coffee("large", false);
```

Results:

```js
coffee.size     // "large"
coffee.isDecaf  // false
```

---

# 10. CLASS METHODS

```js
class Coffee {

    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    description() {
        return `A ${this.size} coffee`;
    }
}
```

Call:

```js
coffee.description();
```

---

# 11. INHERITANCE

A class can inherit from another class using:

```js
extends
```

Example:

```js
class Latte extends Coffee {

    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }

    latteDesc() {
        return `A ${this.size} Latte with ${this.milkType} milk.`;
    }
}
```

Create:

```js
let latte = new Latte("small", false, "2%");
```

---

## `super()`

```js
super(size, isDecaf);
```

Calls the **parent class constructor**.

Parent:

```js
class Coffee {
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }
}
```

Child:

```js
class Latte extends Coffee {
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }
}
```

### Remember

```text
extends → inherit from parent
super() → call parent constructor
```

---

# 12. DOM BASICS

Get element:

```js
const output = document.querySelector("#output");
```

Other common methods:

```js
document.getElementById("output");

document.querySelector(".class");

document.querySelector("#id");

document.querySelector("section");
```

---

## Change text

```js
output.textContent = "Hello!";
```

---

## Create elements

```js
let article = document.createElement("article");
let heading = document.createElement("h2");
let para = document.createElement("p");
let image = document.createElement("img");
let list = document.createElement("ul");
let listItem = document.createElement("li");
```

---

## Set attributes

```js
image.setAttribute("src", "image.jpg");
image.setAttribute("alt", "Description");
```

Or:

```js
image.src = "image.jpg";
```

---

## Append elements

```js
article.appendChild(heading);
article.appendChild(para);

section.appendChild(article);
```

---

# 13. EVENTS

Add event listener:

```js
button.addEventListener("click", function() {
    console.log("Clicked!");
});
```

Arrow function:

```js
button.addEventListener("click", () => {
    console.log("Clicked!");
});
```

Named function:

```js
button.addEventListener("click", fetchResults);
```

---

## Event object

```js
button.addEventListener("click", function(event) {
    event.preventDefault();
});
```

Useful for forms:

```js
event.preventDefault();
```

Prevents the browser's default form submission.

---

# 14. WEEK 10 — JSON

## JSON = JavaScript Object Notation

Example:

```json
{
    "companyName": "I-Scream Company Inc.",
    "headOffice": "North Pole",
    "established": 2026,
    "active": true,
    "topFlavors": [
        {
            "name": "Chocolate Mint",
            "calories": 200,
            "type": "Icecream",
            "ingredients": [
                "Chocolate Syrup",
                "Peppermint Sprinkle",
                "Vanilla Base"
            ]
        }
    ]
}
```

### JSON rules

Strings require:

```json
"double quotes"
```

Objects:

```json
{
    "key": "value"
}
```

Arrays:

```json
[
    "item1",
    "item2"
]
```

Boolean:

```json
true
false
```

No comments in valid JSON.

---

# 15. ACCESS JSON DATA

Given:

```js
json.companyName
```

Nested:

```js
json.topFlavors[0].name
```

Nested array:

```js
json.topFlavors[0].ingredients[0]
```

Loop:

```js
for (let i = 0; i < json.topFlavors.length; i++) {
    console.log(json.topFlavors[i].name);
}
```

---

# 16. FETCH — ASYNC/AWAIT

Basic pattern:

```js
async function populate() {

    let url = "data.json";

    let request = new Request(url);

    let response = await fetch(request);

    let data = await response.json();

    console.log(data);
}
```

Call:

```js
populate();
```

### Memorize this sequence

```text
URL
 ↓
Request
 ↓
fetch()
 ↓
Response
 ↓
response.json()
 ↓
JavaScript object
```

---

# 17. FETCH — SHORT VERSION

```js
async function getData() {

    let response = await fetch("data.json");

    let data = await response.json();

    console.log(data);
}
```

---

# 18. FETCH — PROMISE `.then()`

Same idea without `async/await`:

```js
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.error(error);
    });
```

### Pattern

```text
fetch()
  ↓
.then(response)
  ↓
response.json()
  ↓
.then(json)
  ↓
use data
  ↓
.catch(error)
```

---

# 19. FETCH TEXT

If the server returns text instead of JSON:

```js
fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error("Error occurred!");
        }

        return response.text();
    })
    .then(text => {
        pre.textContent = text;
    })
    .catch(error => {
        pre.textContent = error;
    });
```

### JSON vs text

```js
response.json()
```

for JSON.

```js
response.text()
```

for plain text.

---

# 20. RESPONSE.OK

Always useful when handling fetch:

```js
if (!response.ok) {
    throw new Error("Request failed");
}
```

`response.ok` is `true` for successful HTTP responses.

---

# 21. POPULATING THE DOM FROM JSON

Typical pattern:

```js
function showTopFlavors(json) {

    let topFlavors = json.topFlavors;

    for (let i = 0; i < topFlavors.length; i++) {

        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = topFlavors[i].name;

        p.textContent = topFlavors[i].type;

        image.setAttribute("src", topFlavors[i].image);

        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(image);

        section.appendChild(article);
    }
}
```

---

# 22. NESTED ARRAY LOOP

Example:

```js
let ingredients = topFlavors[i].ingredients;

for (let j = 0; j < ingredients.length; j++) {

    let listItem = document.createElement("li");

    listItem.textContent = ingredients[j];

    list.appendChild(listItem);
}
```

### Important

Outer loop:

```js
i
```

represents the flavor.

Inner loop:

```js
j
```

represents ingredients.

---

# 23. WEEK 11 — PROMISES

A Promise represents an asynchronous operation.

Common pattern:

```js
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

### `.then()`

Runs when Promise succeeds.

### `.catch()`

Handles errors.

---

# 24. GEOLOCATION API

Check browser support:

```js
if (!navigator.geolocation) {

    statusMsg.textContent =
        "Sorry! Geolocation is not supported.";

} else {

    navigator.geolocation.getCurrentPosition(
        success,
        error
    );
}
```

---

## Success callback

```js
function success(position) {

    console.log(position);

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    latitude.textContent = lat + "°";
    longitude.textContent = lon + "°";
}
```

---

## Error callback

```js
function error() {

    statusMsg.textContent =
        "Sorry! We cannot find you.";
}
```

---

## OpenStreetMap URL

```js
let url =
`https://www.openstreetmap.org/#map=12/${lat}/${lon}`;
```

Set link:

```js
mapLink.setAttribute("href", url);
mapLink.setAttribute("target", "_blank");
```

### Important object

```js
position.coords.latitude
position.coords.longitude
```

---

# 25. BATTERY API

Get battery:

```js
navigator.getBattery().then((battery) => {

    console.log(battery);

});
```

Battery properties:

```js
battery.charging
battery.level
```

Charging:

```js
if (battery.charging) {
    console.log("Charging...");
} else {
    console.log("Discharging...");
}
```

Level:

```js
battery.level * 100
```

---

## Update battery UI

```js
function updateBatteryStatus(battery) {

    if (battery.charging) {
        chargeStatus.textContent = "Charging...";
    } else {
        chargeStatus.textContent = "Discharging...";
    }

    chargeLevel.textContent =
        battery.level * 100 + "%";

    chargeMeter.value =
        battery.level * 100;
}
```

---

## Battery events

```js
battery.addEventListener("chargingchange", function() {
    updateBatteryStatus(battery);
});

battery.addEventListener("levelchange", function() {
    updateBatteryStatus(battery);
});
```

---

# 26. DEVICE ORIENTATION

Check support:

```js
if (!window.DeviceOrientationEvent) {

    statusMsg.textContent =
        "Device Orientation Event not supported.";

}
```

Listen for orientation:

```js
window.addEventListener(
    "deviceorientation",
    function(event) {

        console.log(event);

    }
);
```

Values:

```js
event.alpha
event.beta
event.gamma
```

### Meaning

```text
alpha = rotation around Z axis
beta  = front/back tilt
gamma = left/right tilt
```

Round value:

```js
Math.round(event.alpha)
```

Example:

```js
alphaValue.textContent =
    Math.round(event.alpha) + "°";
```

---

# 27. FETCHING A TEXT FILE

```js
fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error("Error occurred!");
        }

        return response.text();
    })
    .then(text => {

        pre.textContent = text;

    })
    .catch(error => {

        pre.textContent = error;

    });
```

---

# 28. SELECT CHANGE EVENT

```js
verseChoose.addEventListener("change", function() {

    let selectedVerse = verseChoose.value;

    updateDisplay(selectedVerse);
});
```

Get selected value:

```js
select.value
```

---

# 29. THIRD-PARTY APIs

Typical workflow:

```text
User interaction
      ↓
Build API URL
      ↓
fetch()
      ↓
Response
      ↓
response.json()
      ↓
Read JSON
      ↓
Create DOM elements
      ↓
Display results
```

---

# 30. NY TIMES API PATTERN

Base URL:

```js
const baseURL =
"https://api.nytimes.com/svc/search/v2/articlesearch.json";
```

Build URL:

```js
let url =
`${baseURL}?q=${searchTerm.value}&api-key=${key}`;
```

Fetch:

```js
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        displayResults(json);
    });
```

---

## Access API results

NYT response:

```js
json.response.docs
```

Loop:

```js
let articles = json.response.docs;

for (let i = 0; i < articles.length; i++) {

    let current = articles[i];

    console.log(current);
}
```

Common fields:

```js
current.web_url
current.headline.main
current.snippet
current.multimedia
```

---

# 31. CHECK IF ARRAY HAS RESULTS

```js
if (articles.length === 0) {

    console.log("No results");

} else {

    // display results
}
```

---

# 32. CHECK IF IMAGE EXISTS

```js
if (current.multimedia.length > 0) {

    img.src = current.multimedia.thumbnail.url;

    img.alt = current.headline.main;
}
```

This prevents trying to access an image that doesn't exist.

---

# 33. FORM SUBMISSION

```js
function fetchResults(event) {

    event.preventDefault();

    // do API request
}
```

Why?

Because otherwise the browser performs the default form submission and reloads/navigates the page.

---

# 34. CLEAR OLD DOM RESULTS

```js
while (section.firstChild) {

    section.removeChild(section.firstChild);
}
```

Useful before displaying new API search results.

---

# 35. WEEK 12 — API REQUESTS

General API request:

```js
fetch(url, {
    method: "POST",

    headers: {
        "Content-Type": "application/json",
        "X-Student-API-Key": studentApiKey
    },

    body: JSON.stringify(requestBody)
})
.then(response => response.json())
.then(json => {
    console.log(json);
});
```

---

# 36. HTTP METHODS

Most important:

```text
GET
POST
PUT
PATCH
DELETE
```

### GET

Retrieve data.

```js
fetch(url)
```

### POST

Send/create data.

```js
fetch(url, {
    method: "POST"
})
```

---

# 37. HTTP HEADERS

Headers provide additional information about the request.

JSON:

```js
"Content-Type": "application/json"
```

API key:

```js
"X-Student-API-Key": studentApiKey
```

---

# 38. JSON.stringify()

Converts JavaScript object → JSON string.

```js
let requestBody = {
    name: "John",
    age: 20
};

body: JSON.stringify(requestBody)
```

### Direction

```text
JavaScript object
       ↓
JSON.stringify()
       ↓
JSON string
```

---

# 39. response.json()

Converts JSON response → JavaScript object.

```js
let response = await fetch(url);

let data = await response.json();
```

### Direction

```text
JSON response
      ↓
response.json()
      ↓
JavaScript object
```

---

# 40. CLAUDE API — WEEK 12

Base URL:

```js
const baseURL =
"https://georgian.polaristechservices.com";
```

Messages endpoint:

```text
POST /api/claude/messages
```

Status endpoint:

```text
GET /api/claude/status
```

---

## Check API usage

```js
let url = `${baseURL}/api/claude/status`;

fetch(url, {
    headers: {
        "X-Student-API-Key": studentApiKey
    }
})
.then(response => response.json())
.then(json => {
    displayStatus(json);
});
```

---

# 41. POST JSON REQUEST

```js
let requestBody = {
    max_tokens: 1000,
    messages: [
        {
            content: userInput,
            role: "user"
        }
    ],
    model: "claude-sonnet-5"
};
```

Send:

```js
fetch(url, {

    method: "POST",

    headers: {
        "X-Student-API-Key": studentApiKey,
        "Content-Type": "application/json"
    },

    body: JSON.stringify(requestBody)

})
.then(response => response.json())
.then(json => {

    displayMessage(json);

});
```

---

# 42. API RESPONSE

Claude response structure:

```js
json.content[0].text
```

Display:

```js
let para = document.createElement("p");

para.textContent =
`Assistant: ${json.content[0].text}`;

results.appendChild(para);
```

---

# 43. API STATUS RESPONSE

Useful properties:

```js
json.is_enabled
json.last_used_at
json.student_id
json.student_name
json.tokens_allocated
json.tokens_remaining
json.tokens_used
```

Example:

```js
pre.textContent = `
Is Enabled: ${json.is_enabled}
Student ID: ${json.student_id}
Student Name: ${json.student_name}
Tokens Allocated: ${json.tokens_allocated}
Tokens Remaining: ${json.tokens_remaining}
Tokens Used: ${json.tokens_used}
`;
```

---

# 44. CONVERSATION HISTORY

For a chatbot, create an array:

```js
let conversationHistory = [];
```

Add user message:

```js
conversationHistory.push({
    role: "user",
    content: userInput
});
```

Send entire history:

```js
let requestBody = {
    max_tokens: 1000,
    messages: conversationHistory,
    model: "claude-sonnet-5"
};
```

After receiving response:

```js
let assistantMessage = json.content[0].text;

conversationHistory.push({
    role: "assistant",
    content: assistantMessage
});
```

### Chat flow

```text
User message
     ↓
push user message
     ↓
send conversationHistory
     ↓
Claude responds
     ↓
push Claude response
     ↓
next user message
     ↓
send entire history again
```

---

# 45. ASYNC/AWAIT API VERSION

Same request using `async/await`:

```js
async function sendChatMessage() {

    let userInput = userMessage.value;

    let requestBody = {
        max_tokens: 1000,
        messages: [
            {
                role: "user",
                content: userInput
            }
        ],
        model: "claude-sonnet-5"
    };

    let response = await fetch(
        `${baseURL}/api/claude/messages`,
        {
            method: "POST",

            headers: {
                "X-Student-API-Key": studentApiKey,
                "Content-Type": "application/json"
            },

            body: JSON.stringify(requestBody)
        }
    );

    let json = await response.json();

    console.log(json);
}
```

---

# 46. MOST IMPORTANT FETCH PATTERNS

## GET JSON

```js
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

## GET TEXT

```js
fetch(url)
    .then(response => response.text())
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.error(error);
    });
```

## POST JSON

```js
fetch(url, {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
```

---

# 47. `async/await` VS `.then()`

### `.then()`

```js
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

### `async/await`

```js
async function getData() {

    try {

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);
    }
}
```

Both accomplish the same general task.

---

# 48. ERROR HANDLING

## Promise style

```js
fetch(url)
    .then(response => {

        if (!response.ok) {
            throw new Error("HTTP error");
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

## Async/await

```js
try {

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("HTTP error");
    }

    let data = await response.json();

} catch (error) {

    console.error(error);
}
```

---

# 49. COMMON DOM PATTERN

If the question asks:

> "Get an element, create an element, put data inside it, and display it."

Use:

```js
const section = document.querySelector("section");

let article = document.createElement("article");
let heading = document.createElement("h2");
let para = document.createElement("p");

heading.textContent = "Title";
para.textContent = "Description";

article.appendChild(heading);
article.appendChild(para);

section.appendChild(article);
```

---

# 50. COMMON ARRAY LOOP

```js
for (let i = 0; i < array.length; i++) {

    console.log(array[i]);
}
```

Object inside array:

```js
for (let i = 0; i < array.length; i++) {

    console.log(array[i].name);
}
```

Nested array:

```js
for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].ingredients.length; j++) {

        console.log(array[i].ingredients[j]);
    }
}
```

---

# 51. TERNARY OPERATOR

Used heavily in the Week 10 JSON example.

```js
condition ? valueIfTrue : valueIfFalse
```

Example:

```js
json.active ? "Active" : "Inactive"
```

Equivalent:

```js
if (json.active) {
    "Active";
} else {
    "Inactive";
}
```

---

# 52. TEMPLATE LITERALS

Use backticks:

```js
`Hello ${name}`
```

Multiple variables:

```js
`A ${size} coffee with ${milk} milk`
```

Useful for URLs:

```js
let url = `${baseURL}?q=${searchTerm.value}`;
```

---

# 53. QUICK SYNTAX TABLE

| Task               | Syntax                       |
| ------------------ | ---------------------------- |
| Object             | `{ name: "John" }`           |
| Access object      | `obj.name`                   |
| Bracket access     | `obj["name"]`                |
| Array              | `["a", "b"]`                 |
| Array item         | `arr[0]`                     |
| Object array       | `arr[0].name`                |
| Method             | `obj.method()`               |
| Current object     | `this`                       |
| Constructor        | `new ClassName()`            |
| Prototype          | `Object.getPrototypeOf(obj)` |
| Class              | `class Name {}`              |
| Inheritance        | `extends`                    |
| Parent constructor | `super()`                    |
| DOM select         | `querySelector()`            |
| Create DOM         | `createElement()`            |
| Add DOM            | `appendChild()`              |
| Change text        | `textContent`                |
| Attribute          | `setAttribute()`             |
| Event              | `addEventListener()`         |
| Prevent default    | `event.preventDefault()`     |
| GET                | `fetch(url)`                 |
| JSON               | `response.json()`            |
| Text               | `response.text()`            |
| POST               | `method: "POST"`             |
| JSON body          | `JSON.stringify(obj)`        |
| Promise success    | `.then()`                    |
| Promise error      | `.catch()`                   |
| Async function     | `async function`             |
| Wait               | `await`                      |

---

# 54. EXAM: RECOGNIZE THE PROBLEM

## "Create an object"

Use:

```js
let person = {
    name: "John",
    age: 20
};
```

## "Create multiple objects from a template"

Use constructor:

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("John", 20);
```

Or class:

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

---

## "Create a subclass"

```js
class Student extends Person {

    constructor(name, age, program) {
        super(name, age);
        this.program = program;
    }
}
```

---

## "Get JSON from a URL"

```js
let response = await fetch(url);
let json = await response.json();
```

---

## "Display JSON on page"

```js
let element = document.createElement("p");
element.textContent = json.name;
section.appendChild(element);
```

---

## "Send JSON to API"

```js
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});
```

---

## "Get user's location"

```js
navigator.geolocation.getCurrentPosition(success, error);
```

---

## "Listen for an event"

```js
element.addEventListener("click", function(event) {
    // code
});
```

---

# 55. EXAM DEBUGGING CHECKLIST

If your code isn't working:

### 1. Is the selector correct?

```js
document.querySelector("#output");
```

Check HTML:

```html
<p id="output"></p>
```

### 2. Did you call the function?

```js
populate();
```

### 3. Did you use `await`?

```js
let response = await fetch(url);
```

### 4. Did you convert the response?

```js
await response.json()
```

or:

```js
await response.text()
```

### 5. Is the JSON path correct?

Example:

```js
json.response.docs
```

not:

```js
json.docs
```

### 6. Is the array actually populated?

```js
console.log(array);
console.log(array.length);
```

### 7. Does the property exist?

```js
console.log(object);
console.log(object.property);
```

### 8. Is the image/API field optional?

Check first:

```js
if (array.length > 0) {
    // use it
}
```

### 9. Check browser Console

```js
console.log(variable);
```

### 10. Check Network tab

For API/fetch problems, inspect:

```text
Request URL
Status
Request method
Headers
Response
```

---

# 56. ULTRA-QUICK FETCH CHEAT SHEET

### GET JSON

```js
async function getData() {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
}
```

### GET TEXT

```js
async function getText() {
    let response = await fetch(url);
    let text = await response.text();
    console.log(text);
}
```

### POST JSON

```js
async function sendData() {

    let data = {
        name: "John"
    };

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let json = await response.json();

    console.log(json);
}
```

### GET + error handling

```js
async function getData() {

    try {

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        let json = await response.json();

        console.log(json);

    } catch (error) {

        console.error(error);
    }
}
```

---

# 57. ONE COMPLETE API → DOM TEMPLATE

This is probably the most useful pattern to memorize:

```js
const section = document.querySelector("section");

async function populate() {

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    let json = await response.json();

    for (let i = 0; i < json.items.length; i++) {

        let article = document.createElement("article");
        let heading = document.createElement("h2");
        let para = document.createElement("p");

        heading.textContent = json.items[i].name;
        para.textContent = json.items[i].description;

        article.appendChild(heading);
        article.appendChild(para);

        section.appendChild(article);
    }
}

populate();
```

---

# 58. ONE COMPLETE POST API TEMPLATE

```js
async function sendData() {

    let input = document.querySelector("#input");

    let data = {
        message: input.value
    };

    try {

        let response = await fetch(url, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer TOKEN"
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let json = await response.json();

        console.log(json);

    } catch (error) {

        console.error(error);
    }
}
```

---

# 59. DO NOT CONFUSE THESE

```text
JSON
↓
response.json()
↓
JavaScript object
```

versus:

```text
JavaScript object
↓
JSON.stringify()
↓
JSON string
```

And:

```text
response.text()
```

is for plain text.

---

# 60. MOST IMPORTANT CONCEPTS TO KNOW

Before the test, make sure you can write these **without looking them up**:

```js
document.querySelector()
```

```js
document.createElement()
```

```js
element.appendChild()
```

```js
element.textContent
```

```js
element.setAttribute()
```

```js
element.addEventListener()
```

```js
event.preventDefault()
```

```js
fetch()
```

```js
response.json()
```

```js
response.text()
```

```js
JSON.stringify()
```

```js
async / await
```

```js
.then() / .catch()
```

```js
class
```

```js
extends
```

```js
super()
```

```js
new
```

```js
this
```

```js
Object.create()
```

```js
Object.getPrototypeOf()
```

```js
navigator.geolocation
```

```js
navigator.getBattery()
```

```js
window.addEventListener("deviceorientation", ...)
```

---

# 61. WEEK-BY-WEEK MAP

| Week   | Main Topics                                                                       | GitHub                                                                     |
| ------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **08** | Objects, object literals, methods, `this`, constructors, `new`, `Object.create()` | [Week 08](https://github.com/PriyanshT/26S-JavaScript-02-Week08/tree/main) |
| **09** | Prototypes, prototype chain, classes, methods, inheritance, `extends`, `super`    | [Week 09](https://github.com/PriyanshT/26S-JavaScript-02-Week09)           |
| **10** | JSON, nested objects/arrays, `fetch()`, `async/await`, DOM generation             | [Week 10](https://github.com/PriyanshT/26S-JavaScript-02-Week10)           |
| **11** | Promises, Geolocation, Battery API, Device Orientation, text fetching, NYT API    | [Week 11](https://github.com/PriyanshT/26S-JavaScript-02-Week11)           |
| **12** | REST/API requests, GET/POST, headers, JSON body, Claude API, chat history         | [Week 12](https://github.com/PriyanshT/26S-JavaScript-02-Week12)           |

---

# 62. LAST-MINUTE MEMORY MAP

```text
OBJECT
  ├── property
  ├── method()
  ├── this
  ├── nested object
  └── array

CONSTRUCTOR
  ├── function Person()
  ├── this.name
  └── new Person()

PROTOTYPE
  ├── prototype
  ├── inheritance
  └── prototype chain

CLASS
  ├── class
  ├── constructor()
  ├── method()
  ├── extends
  └── super()

JSON
  ├── object
  ├── arrays
  └── nested data

FETCH
  ├── URL
  ├── fetch()
  ├── response
  ├── response.json()
  ├── response.text()
  ├── .then()
  └── .catch()

API
  ├── GET
  ├── POST
  ├── headers
  ├── body
  └── JSON.stringify()

DOM
  ├── querySelector()
  ├── createElement()
  ├── textContent
  ├── setAttribute()
  └── appendChild()

BROWSER APIs
  ├── navigator.geolocation
  ├── navigator.getBattery()
  └── DeviceOrientationEvent
```

## Security note

Do **not** put your real API key/student credential into a public GitHub README or cheat sheet. If an API key appears in old course code, treat it as exposed and use the instructor-provided/test credential as appropriate.
