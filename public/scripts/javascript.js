// ///function submit(event) {
//   event.preventDefault();
//   function checkHasNotTypedField() {
//     const list = [...document.querySelectorAll(".form-input")];

//     console.log(list.filter((input) => !input.value));

//     return list.filter((input) => !input.value).length > 0;
//   }
//   console.log("aaaaaaaaaaaaaaaaaa");

//   if (checkHasNotTypedField()) {
//     alert("Existem campos vazios pendentes");
//     return;
//   }
// }///

const Form = {
  phoneInput: document.querySelector("#telefone"),
  cpfInput: document.querySelector("#cpf"),

  submit: (event) => {
    if (Form.checkHasNotTypedField()) {
      event.preventDefault();
      return;
    }
    Form.phoneInput.value = Form.destroyPhoneMask(Form.phoneInput.value);
  },

  login: (event) => {
    if (Form.checkHasNotTypedField()) {
      event.preventDefault();
      return;
    }
  },

  createPhoneMask: (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{3})(\d)/, "$1-$2");
  },

  createCpfMask: (value) => {
    return value.replace();
  },

  destroyPhoneMask: (value) => {
    return value.replace(/\D/g, "");
  },

  checkHasNotTypedField: () => {
    const inputList = [...document.querySelectorAll(".form-input")];
    return inputList.filter((input) => !input.value).length > 0;
  },

  registerEvents: () => {
    const phone = Form.phoneInput;
    const cpf = Form.cpfInput;

    phone.addEventListener("keypress", () => {
      phone.value = Form.createPhoneMask(phone.value);
    });
    cpf.addEventListener("keypress", () => {
      cpf.value = Form.createCpfMask(cpf.value);
    });
  },
};

Form.registerEvents();
