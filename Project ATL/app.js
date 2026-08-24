
//data

let owner = {
    name: "Njoroge Kamau",
    email: "Kamau@example.com",
    phone: "0712345678"
};


let units = [

    {
        id: 1,
        number: "A101",
        type: "1 Bedroom",
        rent: 15000,
        tenant: 1
    },

    
];


let tenants = [

    {
        id: 1,
        name: "Samuel Kinuthia",
        phone: "0711111111",
        unit: 1
    },

];


let utilities = [

    {
        id: 1,
        name: "Water",
        cost: 1000
    },

];



   //Page Navigation

function showPage(pageName) {

    // Get all pages
    let pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    // Show selected page
    document.getElementById(pageName)
        .classList.remove("hidden");

    // Refresh information
    if (pageName === "dashboard") {
        updateDashboard();
    }

    if (pageName === "units") {
        displayUnits();
    }

    if (pageName === "tenants") {
        displayTenants();
        updateTenantUnitList();
    }

    if (pageName === "utilities") {
        displayUtilities();
    }

    if (pageName === "bills") {
        updateBillTenantList();
    }

}


//Owner

function saveOwner(event) {

    event.preventDefault();

    owner.name =
        document.getElementById("ownerName").value;

    owner.email =
        document.getElementById("ownerEmail").value;

    owner.phone =
        document.getElementById("ownerPhone").value;


    document.getElementById("displayOwner")
        .innerText = owner.name;


    alert("Owner information saved successfully!");

}


//units

function openUnitForm() {

    document
        .getElementById("unitForm")
        .classList.toggle("hidden");

}


function addUnit(event) {

    event.preventDefault();


    let unit = {

        id: units.length + 1,

        number:
            document.getElementById("unitNumber").value,

        type:
            document.getElementById("unitType").value,

        rent:
            Number(
                document.getElementById("unitRent").value
            ),

        tenant: null

    };


    units.push(unit);


    event.target.reset();


    document
        .getElementById("unitForm")
        .classList.add("hidden");


    displayUnits();

    updateDashboard();

    alert("Unit added successfully!");

}


function displayUnits() {

    let table =
        document.getElementById("unitsTable");


    table.innerHTML = "";


    units.forEach(function(unit) {

        let tenant = tenants.find(
            function(t) {
                return t.id === unit.tenant;
            }
        );


        let status =
            tenant ? "Occupied" : "Vacant";


        let row = `

            <tr>

                <td>${unit.number}</td>

                <td>${unit.type}</td>

                <td>KES ${unit.rent.toLocaleString()}</td>

                <td>${status}</td>

                <td>
                    ${tenant ? tenant.name : "None"}
                </td>

            </tr>

        `;


        table.innerHTML += row;

    });

}


//Tenants

function updateTenantUnitList() {

    let select =
        document.getElementById("tenantUnit");


    select.innerHTML = "";


    units.forEach(function(unit) {

        if (unit.tenant === null) {

            select.innerHTML += `

                <option value="${unit.id}">
                    ${unit.number} -
                    ${unit.type} -
                    KES ${unit.rent.toLocaleString()}
                </option>

            `;

        }

    });


    if (select.innerHTML === "") {

        select.innerHTML =
            `<option value="">No vacant units</option>`;

    }

}


function addTenant(event) {

    event.preventDefault();


    let unitId =
        Number(
            document.getElementById("tenantUnit").value
        );


    if (!unitId) {

        alert("Please select a vacant unit.");

        return;

    }


    let tenant = {

        id: tenants.length + 1,

        name:
            document.getElementById("tenantName").value,

        phone:
            document.getElementById("tenantPhone").value,

        unit: unitId

    };


    tenants.push(tenant);


    // Find unit
    let unit = units.find(
        function(u) {
            return u.id === unitId;
        }
    );


    // Allocate unit
    unit.tenant = tenant.id;


    event.target.reset();


    displayTenants();

    displayUnits();

    updateTenantUnitList();

    updateDashboard();


    alert("Tenant allocated successfully!");

}


function displayTenants() {

    let table =
        document.getElementById("tenantsTable");


    table.innerHTML = "";


    tenants.forEach(function(tenant) {

        let unit = units.find(
            function(u) {
                return u.id === tenant.unit;
            }
        );


        table.innerHTML += `

            <tr>

                <td>${tenant.name}</td>

                <td>${tenant.phone}</td>

                <td>
                    ${unit ? unit.number : "Not assigned"}
                </td>

            </tr>

        `;

    });

}


//Utilities

function openUtilityForm() {

    document
        .getElementById("utilityForm")
        .classList.toggle("hidden");

}


function addUtility(event) {

    event.preventDefault();


    let utility = {

        id: utilities.length + 1,

        name:
            document.getElementById("utilityName").value,

        cost:
            Number(
                document.getElementById("utilityCost").value
            )

    };


    utilities.push(utility);


    event.target.reset();


    document
        .getElementById("utilityForm")
        .classList.add("hidden");


    displayUtilities();

    updateDashboard();


    alert("Utility added successfully!");

}


function displayUtilities() {

    let container =
        document.getElementById("utilitiesList");


    container.innerHTML = "";


    utilities.forEach(function(utility) {

        container.innerHTML += `

            <div class="utility-card">

                <h3>${utility.name}</h3>

                <p>Monthly cost per tenant</p>

                <div class="utility-price">

                    KES ${utility.cost.toLocaleString()}

                </div>

            </div>

        `;

    });

}


//Billing

function updateBillTenantList() {

    let select =
        document.getElementById("billTenant");


    select.innerHTML =
        `<option value="">Select Tenant</option>`;


    tenants.forEach(function(tenant) {

        select.innerHTML += `

            <option value="${tenant.id}">
                ${tenant.name}
            </option>

        `;

    });

}


function generateBill() {

    let tenantId =
        Number(
            document.getElementById("billTenant").value
        );


    let bill =
        document.getElementById("bill");


    if (!tenantId) {

        bill.innerHTML =
            "Select a tenant to generate a bill.";

        return;

    }


    let tenant = tenants.find(
        function(t) {
            return t.id === tenantId;
        }
    );


    let unit = units.find(
        function(u) {
            return u.id === tenant.unit;
        }
    );


    let utilityTotal = 0;


    utilities.forEach(function(utility) {

        utilityTotal += utility.cost;

    });


    let total =
        unit.rent + utilityTotal;


    let utilityRows = "";


    utilities.forEach(function(utility) {

        utilityRows += `

            <div class="bill-row">

                <span>${utility.name}</span>

                <span>
                    KES ${utility.cost.toLocaleString()}
                </span>

            </div>

        `;

    });


    bill.innerHTML = `

    <div class="bill-header">

        <h2>ATL Apartments</h2>

        <p>Monthly Tenant Bill</p>

        <p>
            Date: ${new Date().toLocaleDateString()}
        </p>

    </div>


    <p>
        <strong>Tenant:</strong>
        ${tenant.name}
    </p>


    <p>
        <strong>Phone:</strong>
        ${tenant.phone}
    </p>


    <p>
        <strong>Unit:</strong>
        ${unit.number}
    </p>


    <hr>


    <div class="bill-row">

        <span>Monthly Rent</span>

        <span>
            KES ${unit.rent.toLocaleString()}
        </span>

    </div>


    ${utilityRows}


    <div class="bill-total">

        <span>Total Amount</span>

        <span>
            KES ${total.toLocaleString()}
        </span>

    </div>


    <!-- PRINT BUTTON -->

    <div class="print-area">

        <button
            onclick="printBill()"
            class="print-button">

            Print Bill

        </button>

    </div>

`;

}

//Print Monthly Bill

function printBill() {

    window.print();

}

//Dashboard

function updateDashboard() {

    let totalUnits =
        units.length;


    let activeTenants =
        tenants.length;


    let rentIncome = 0;


    units.forEach(function(unit) {

        if (unit.tenant !== null) {

            rentIncome += unit.rent;

        }

    });


    let utilityIncomePerTenant = 0;


    utilities.forEach(function(utility) {

        utilityIncomePerTenant += utility.cost;

    });


    let utilityIncome =
        utilityIncomePerTenant *
        activeTenants;


    let totalIncome =
        rentIncome +
        utilityIncome;


    document.getElementById("totalIncome")
        .innerText =
        "KES " + totalIncome.toLocaleString();


    document.getElementById("totalUnits")
        .innerText =
        totalUnits;


    document.getElementById("utilityIncome")
        .innerText =
        "KES " + utilityIncome.toLocaleString();


    document.getElementById("totalTenants")
        .innerText =
        activeTenants;

}


//Dashboard Details

function showDetails(type) {

    let title =
        document.getElementById("detailsTitle");


    let content =
        document.getElementById("detailsContent");


    if (type === "income") {

        let rent = 0;


        units.forEach(function(unit) {

            if (unit.tenant !== null) {

                rent += unit.rent;

            }

        });


        let utilitiesTotal = 0;


        utilities.forEach(function(utility) {

            utilitiesTotal += utility.cost;

        });


        let utilityIncome =
            utilitiesTotal * tenants.length;


        title.innerText =
            "Income Breakdown";


        content.innerHTML = `

            <p>
                <strong>Rent Income:</strong>
                KES ${rent.toLocaleString()}
            </p>

            <p>
                <strong>Utility Income:</strong>
                KES ${utilityIncome.toLocaleString()}
            </p>

            <p>
                <strong>Total Income:</strong>
                KES ${(rent + utilityIncome).toLocaleString()}
            </p>

        `;

    }


    if (type === "units") {

        title.innerText =
            "Unit Breakdown";


        let html = "<table>";

        html += `

            <tr>
                <th>Unit</th>
                <th>Status</th>
                <th>Rent</th>
            </tr>

        `;


        units.forEach(function(unit) {

            let status =
                unit.tenant
                ? "Occupied"
                : "Vacant";


            html += `

                <tr>

                    <td>${unit.number}</td>

                    <td>${status}</td>

                    <td>
                        KES ${unit.rent.toLocaleString()}
                    </td>

                </tr>

            `;

        });


        html += "</table>";


        content.innerHTML = html;

    }


    if (type === "utilities") {

        title.innerText =
            "Utility Breakdown";


        let html = "<table>";

        html += `

            <tr>
                <th>Utility</th>
                <th>Cost / Tenant</th>
                <th>Total Income</th>
            </tr>

        `;


        utilities.forEach(function(utility) {

            let total =
                utility.cost * tenants.length;


            html += `

                <tr>

                    <td>${utility.name}</td>

                    <td>
                        KES ${utility.cost.toLocaleString()}
                    </td>

                    <td>
                        KES ${total.toLocaleString()}
                    </td>

                </tr>

            `;

        });


        html += "</table>";


        content.innerHTML = html;

    }


    if (type === "tenants") {

        title.innerText =
            "Tenant Breakdown";


        let html = "<table>";

        html += `

            <tr>
                <th>Tenant</th>
                <th>Phone</th>
                <th>Unit</th>
            </tr>

        `;


        tenants.forEach(function(tenant) {

            let unit =
                units.find(
                    function(u) {
                        return u.id === tenant.unit;
                    }
                );


            html += `

                <tr>

                    <td>${tenant.name}</td>

                    <td>${tenant.phone}</td>

                    <td>
                        ${unit ? unit.number : "None"}
                    </td>

                </tr>

            `;

        });


        html += "</table>";


        content.innerHTML = html;

    }

}


//Start Applicaattion

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Display initial information

        updateDashboard();

        displayUnits();

        displayTenants();

        displayUtilities();

        updateTenantUnitList();

        updateBillTenantList();

    }
);