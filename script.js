const form = document.querySelector('#form-register');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  data = {
    name: e.target.elements['user-name'].value,
    age: e.target.elements['user-age'].value,
    city: e.target.elements['user-city'].value,
    street: e.target.elements['user-street'].value,
    number: e.target.elements['user-number'].value,
    complement: e.target.elements['user-complement'].value,
  };

  console.log(data);
});
