const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const peso = getInputNumberValue('peso');
  const altura = getInputNumberValue('altura');

  var form = document.querySelector('form');

  var imc = 0;
  var resultado = document.getElementById('resultado');

  form.addEventListener('submit', function (event) {
    var altura = parseInt(form.altura.value);
    var peso = parseInt(form.peso.value);

    imc = (peso / Math.pow((altura / 100), 2)).toFixed(2);

    if (imc < 16) {
      alert("Baixo peso muito grave " + imc + " kg/m²");

    } else if (imc >= 16 && imc <= 16.99) {
      alert("Baixo peso grave " + imc + " kg/m²");

    } else if (imc >= 17.00 && imc <= 18.49) {
      alert("Baixo peso " + imc + " kg/m²");

    } else if (imc >= 18.50 && imc <= 24.99) {
      alert("Peso normal " + imc + " kg/m²");

    } else if (imc >= 25.00 && imc <= 29.99) {
      alert("Sobrepeso " + imc + " kg/m²");

    } else if (imc >= 30 && imc <= 34.99) {
      alert("Obesidade grau I  " + imc + " kg/m²");

    } else if (imc >= 35.00 && imc <= 39.99) {
      alert("Obesidade grau II " + imc + " kg/m²");

    } else if (imc >= 40.00) {
      layout = `
      <h2>Aqui está o resultado:</h2>
      <div class="result-content">
        <ul>
          <li>
          Peso normal <strong>${imc} </strong>.
          </li>
        </ul>
      </div>
    `;
    }

    

    const result = document.getElementById('result');

    result.innerHTML = layout;

  });
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}