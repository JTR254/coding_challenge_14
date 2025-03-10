// Task 1 - Creating the Base Structure
    // done in html and style file

// Task 2 - Support Tickets Dynamic Addition

    function addTicket (name, issueDescription) { // creates function that adds a ticket to the dashboard
        const ticketContainer = document.getElementById ("ticketContainer");
        
        const ticketCard = document.createElement("div"); // creates new "div" element
        ticketCard.setAttribute("class", "ticket-card");
        ticketCard.setAttribute("id","issueDescription" )
    
        const heading = document.createElement("h2"); // Ticketer's name appears in a heading format
        heading.textContent = name;
    
        const paragraph = document.createElement("p"); // Ticketer's position appears in a paragraph format
        paragraph.textContent = issueDescription;
    
        const resolveButton = document.createElement("button"); // creates resolve button to remove the ticket card
        resolveButton.setAttribute ("class", "remove-btn");
        resolveButton.textContent = "Resolve"; // puts the word "resolve" inside the button
        resolveButton.addEventListener("click", () => { // function so when resolve is clicked, the card disappears.
            ticketContainer.removeChild(ticketCard);
        });
    
        ticketCard.appendChild(heading); // adds the child element (heading) to the parent element (ticketCard)
        ticketCard.appendChild(paragraph); // adds the child element (paragraph) to the parent element (ticketCard)
        ticketCard.appendChild(resolveButton); // adds the child element (removeButton) to the parent element (ticketCard)
    
        ticketContainer.appendChild(ticketCard); // adds the child element (ticketCard) to the parent element (ticketContainer)
    };

