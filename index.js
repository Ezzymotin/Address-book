// Select form and contact list elements
const form = document.getElementById('address-form');
const contactList = document.getElementById('contacts');

// Constructor for a Contact object
function Contact(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const newContact = new Contact(name, email, phone);

    addContactToList(newContact);
    form.reset();
});

// Function to add contact to the contact list
function addContactToList(contact) {
    const listItem = document.createElement('li');
    listItem.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
    contactList.appendChild(listItem);
}
