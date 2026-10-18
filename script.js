const form = document.getElementById('rsvp-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const response = {
    name: data.get('name')?.trim() || '',
    attendance: data.get('attendance') || '',
    drinks: data.getAll('drinks'),
    diet: data.get('diet') || '',
    dietDetails: data.get('dietDetails')?.trim() || '',
    submittedAt: new Date().toISOString()
  };

  // Demo only: responses are saved in this browser, not sent to the hosts.
  const key = 'wedding-rsvp-demo';
  const saved = JSON.parse(localStorage.getItem(key) || '[]');
  saved.push(response);
  localStorage.setItem(key, JSON.stringify(saved));

  message.textContent = 'Спасибо! Ответ отмечен в демо-версии.';
  form.reset();
});
