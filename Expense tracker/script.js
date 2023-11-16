let expenses = [], total = 0;

const updateUI = () => {
    const expensesList = document.getElementById('expenses');
    const totalElement = document.getElementById('total');

    expensesList.innerHTML = '';
    total = expenses.reduce((acc, { description, amount }, index) => {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteExpense(index);

        listItem.textContent = `${description}: ₹${amount}`;
        listItem.appendChild(deleteButton);

        expensesList.appendChild(listItem);
        return acc + amount;
    }, 0);

    totalElement.textContent = total.toFixed(2);
};

const addExpense = () => {
    const description = document.getElementById('expense-input').value;
    const amount = parseFloat(document.getElementById('amount-input').value);

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please enter valid values for description and amount.');
        return;
    }

    expenses.push({ description, amount });
    updateUI();
};

const deleteExpense = (index) => {
    expenses.splice(index, 1);
    updateUI();
};

const toggleExpenseList = () => {
    const expenseList = document.getElementById('expense-list');
    expenseList.style.display = (expenseList.style.display === 'none') ? 'block' : 'none';
};

updateUI();