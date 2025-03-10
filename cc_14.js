// Task 1 - Creating the Base Structure
    // done in html and style file

// Task 2 - Support Tickets Dynamic Addition

    function addTicket (name, issueDescription, priorityLevel) { // creates function that adds a ticket to the dashboard
        const ticketContainer = document.getElementById ("ticketContainer");
        
        const ticketCard = document.createElement("div"); // creates new "div" element
        ticketCard.setAttribute("class", "ticket-card");
        ticketCard.setAttribute("id",issueDescription)
    
        const heading = document.createElement("h2"); // Ticketer's name appears in a heading format
        heading.textContent = name;
    
        const paragraph = document.createElement("p"); // Ticketer's issue appears in a paragraph format
        paragraph.textContent = issueDescription;
        
        const priorityLabel = document.createElement("label"); //Ticketer's priority level appears in a label format
        priorityLabel.setAttribute("class", "priority");
        priorityLabel.textContent = `Priority: ${priorityLevel}`;

        const resolveButton = document.createElement("button"); // creates resolve button to remove the ticket card
        resolveButton.setAttribute ("class", "remove-btn");
        resolveButton.textContent = "Resolve"; // puts the word "resolve" inside the button
        resolveButton.addEventListener("click", (event) => { // function so when resolve is clicked, the card disappears.
            event.stopPropagation()
            ticketContainer.removeChild(ticketCard);
        });
    
        ticketCard.appendChild(heading); // adds the child element (heading) to the parent element (ticketCard)
        ticketCard.appendChild(paragraph); // adds the child element (paragraph) to the parent element (ticketCard)
        ticketCard.appendChild(priorityLabel); // adds the priority label to the ticketCard
        ticketCard.appendChild(document.createElement("br")); // adds a line break
        ticketCard.appendChild(document.createElement("br")); // adds a line break
        ticketCard.appendChild(resolveButton); // adds the child element (removeButton) to the parent element (ticketCard)

        ticketContainer.appendChild(ticketCard); // adds the child element (ticketCard) to the parent element (ticketContainer)

        highlightHighPriorityTickets(); // Task 3; puts function in function in order to see the highlighted card
    };

// Task 3 - Highlighting High Priority Tickets

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".ticket-card"); // Select all tickets with "High" priority

    const ticketArray = Array.from(highPriorityTickets); // convert to an array
    ticketArray.forEach(ticket => {
        if (ticket.textContent.includes("High")) {
            ticket.style.backgroundColor = "#ffcccc"; // light red background if it is a high priority ticket
        }
    });
};

addTicket("Steve Kerr", "System Reboot", "Low"); // adds pre-existing ticket
addTicket("Magic Johnson", "Computer Virus", "High"); // adds pre-existing ticket

// Task 4 - Support Ticket Resolution with Event Bubbling

ticketContainer.addEventListener("click", () => {
    console.log("Ticket card was clicked!"); // when ticket container is clicked in, a message pops up in the console
});