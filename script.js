function validityField(parentElementId, text) {
  const parentElement = document.getElementById(parentElementId);
  const inp = parentElement.querySelector('input');
  const errorElement = parentElement.querySelector('.error');

  if (inp.value.trim() === '') {
    if (!errorElement) {
      const createElementError = `<div class="error">${text}</div>`;
      parentElement.insertAdjacentHTML('beforeend', createElementError);

      inp.style.border = '1px solid red';
      parentElement.style.color = 'red';
    }
    return false;
  }

  parentElement.style.color = '';
  inp.style.border = '';
  errorElement ? errorElement.remove() : '';
  return true;
}

const form = document.querySelector('#form-register');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const valids = [
    validityField('info-name', 'Campo nome precisa ser preenchido.'),
    validityField('info-age', 'Campo idade precisa ser preenchido.'),
    validityField('info-city', 'Campo cidade precisa ser preenchido.'),
    validityField('info-street', 'Campo rua precisa ser preenchido.'),
  ];

  const allValid = valids.every((result) => result === true);

  if (allValid) {
    data = {
      name: e.target.elements['user-name'].value.trim(),
      age: e.target.elements['user-age'].value.trim(),
      city: e.target.elements['user-city'].value.trim(),
      street: e.target.elements['user-street'].value.trim(),
      number: e.target.elements['user-number'].value.trim(),
      complement: e.target.elements['user-complement'].value.trim(),
    };

    console.log(data);
  }
});
