// Income Form Handling
const incomeForm = document.getElementById('incomeForm');
if (incomeForm) {
  incomeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('incomeTitle').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    const date = document.getElementById('incomeDate').value;

    addRecord({ title, amount, date, type: 'Income' });
    alert("Income added successfully!");
    incomeForm.reset();
  });
}

// Expense Form Handling
const expenseForm = document.getElementById('expenseForm');
if (expenseForm) {
  expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('expenseTitle').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const date = document.getElementById('expenseDate').value;

    addRecord({ title, amount, date, type: 'Expense' });
    alert("Expense added successfully!");
    expenseForm.reset();
  });
}

// Store records in localStorage
function addRecord(record) {
  const records = JSON.parse(localStorage.getItem('records')) || [];
  records.push(record);
  localStorage.setItem('records', JSON.stringify(records));
}

// Show Records on records.html
const recordsContainer = document.getElementById('recordsContainer');
if (recordsContainer) {
  const records = JSON.parse(localStorage.getItem('records')) || [];
  if (records.length === 0) {
    recordsContainer.innerHTML = '<p>No records yet.</p>';
  } else {
    records.forEach(rec => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${rec.title}</strong> - ₹${rec.amount} (${rec.type})<br>
        <small>${rec.date}</small>
        <hr>`;
      recordsContainer.appendChild(div);
    });
  }
}
function goToLogin() {
  window.location.href = "login.html";
}

function goToIncome() {
  window.location.href = "income.html";
}

function goToExpense() {
  window.location.href = "expense.html";
}

function goToRecords() {
  window.location.href = "records.html";
}
