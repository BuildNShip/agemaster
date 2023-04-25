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
  
  const seconds = now.diff(dob, 'seconds');
  const minutes = now.diff(dob, 'minutes');
  const hours = now.diff(dob, 'hours');
  const days = now.diff(dob, 'days');
  const months = now.diff(dob, 'months');
  const years = now.diff(dob, 'years');

  resultDiv.innerHTML = `
    <div class="result">
      <p>You have been <span class="or">Alive</span> for:</p>
      <p><span class="or">${seconds.toLocaleString()}</span> seconds</p>
      <p><span class="or">${minutes.toLocaleString()}</span> minutes</p>
      <p><span class="or">${hours.toLocaleString()}</span> hours</p>
      <p><span class="or">${days.toLocaleString()}</span> days</p>
      <p><span class="or">${months.toLocaleString()}</span> months</p>
      <p><span class="or">${years.toLocaleString()}</span> years</p>
    </div>
  `;
}

calculateButton.addEventListener('click', calculateAge);
