let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

function updateData(e) {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', updateData);

document.addEventListener('DOMContentLoaded', function () {
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
    formData = storedData;
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Please, fill all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };

  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="message"]').value = '';
});