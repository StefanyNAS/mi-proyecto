document.getElementById('addContactButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name && phone) {
        const contactList = document.getElementById('contactList');
        const contactDiv = document.createElement('div');
        
        contactDiv.classList.add('contact');
        contactDiv.textContent = `${name} - ${phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');
        
        deleteButton.addEventListener('click', function() {
            contactList.removeChild(contactDiv);
        });
        
        contactDiv.appendChild(deleteButton);
        contactList.appendChild(contactDiv);
        
        nameInput.value = '';
        phoneInput.value = '';
    }
});