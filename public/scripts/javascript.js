function verificar(event) {
  event.preventDefault();
  function checkHasNotTypedField() {
    const list = [...document.querySelectorAll(".form-input")];

    console.log(list.filter((input) => !input.value));

    return list.filter((input) => !input.value).length > 0;
  }
  if (checkHasNotTypedField()) {
    alert("Existem campos vazios pendentes");
    return false;
  }
  return true;
}

//JS DO LOGIN

//MASCARA JQUERY
$("#cpf").mask("999.999.999-99");
$("#telefone").mask("(99) 99999-9999");
$("#cep").mask("99.999-999");

// document.getElementById('olho').addEventListener('mousedown', function() {
//   document.getElementById('pass').type = 'text';
// });

// document.getElementById('olho').addEventListener('mouseup', function() {
//   document.getElementById('pass').type = 'password';
// });

// // Para que o password não fique exposto apos mover a imagem.
// document.getElementById('olho').addEventListener('mousemove', function() {
//   document.getElementById('pass').type = 'password';
// });

//   //javascript da LATERALBAR//*
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }

//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
//   }
