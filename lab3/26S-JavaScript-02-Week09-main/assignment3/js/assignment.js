//student infos
const studentName = "Thiemi Soubhia Doi";
const studentId = "200645138";

document.getElementById("infos").textContent = `Student Name: ${studentName} - Student ID: ${studentId}`;

//Pizza Class
class Pizza {

    constructor(customerName, email, phone, address, size, crust, toppings, instructions) {
        this.customerName = customerName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.instructions = instructions;
    }


    //pizza description
    getDescription() {
        let description =  `Customer Information:
        Name: ${this.customerName}
        Email: ${this.email}
        Phone: ${this.phone}
        Address: ${this.address}

        Pizza Order:
        Size: ${this.size}
        Crust: ${this.crust}
        Toppings: ${this.toppings.join(", ")}
        Instructions: ${this.instructions || "None"}
        `;

        return description;
    }
}

document.getElementById("pizzaForm").addEventListener("submit", function(event) {

    event.preventDefault();

    //validate form
    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    const customerName = document.getElementById("customerName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;


    //pizza infos
    const size = document.getElementById("pizzaSize").value;


    const crust = document.querySelector(
        'input[name="crust"]:checked'
    ).value;


    const toppings = Array.from(
        document.querySelectorAll('input[name="toppings"]:checked')
    ).map(item => item.value);


    const instructions = document.getElementById("instructions").value;



    //Pizza object
    const pizzaOrder = new Pizza( customerName, email, phone, address, size, crust, toppings, instructions);

});