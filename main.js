const form = document.getElementById("register-form");
const button = document.getElementById("register-btn");
const originalText = button.textContent;

function registerUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email && data.password) {
        resolve({ id: Date.now(), ...data });
      } else {
        reject(new Error("Помилка реєстрації"));
      }
    }, 2000);
  });
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  button.disabled = true;
  button.textContent = "Loading...";
  registerUser(data)
    .then((result) => {
      form.reset(); // очищення форми після успіху
      console.log("Реєстрація успішна:", result);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = originalText;
    });
});