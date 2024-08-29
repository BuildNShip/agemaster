const calculateButton = document.getElementById('calculate');
const dobInput = document.getElementById('dob');
const resultDiv = document.getElementById('result');

flatpickr(dobInput, {
    dateFormat: 'Y-m-d',
    maxDate: new Date(),
    onChange: () => {
        dobInput.value = moment(dobInput.value).format('YYYY-MM-DD');
    }
});

function calculateAge() {
    const dob = moment(dobInput.value);
    const now = moment();

    const minutes = now.diff(dob, 'minutes');
    const hours = now.diff(dob, 'hours');
    const days = now.diff(dob, 'days');
    const months = now.diff(dob, 'months');
    resultDiv.innerHTML = `
    <div class="result">
      <p>You lived <span class="or">${minutes.toLocaleString()}</span> minutes</p>
      <p>You lived <span class="or">${hours.toLocaleString()}</span> hours</p>
      <p>You lived <span class="or">${days.toLocaleString()}</span> days</p>
      <p>You lived <span class="or">${months.toLocaleString()}</span> months</p>
    </div>
  `;
}

calculateButton.addEventListener('click', calculateAge);
