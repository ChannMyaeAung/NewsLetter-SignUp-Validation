const signUpSection = document.querySelector(".sign-up-section");
const sectionSuccess = document.querySelector(".section-success");
const form = document.querySelector("#email-form");
const emailInput = document.querySelector(".user-email");
const invalidFeedback = document.querySelector(".invalid-feedback");
const validFeedback = document.querySelector(".valid-feedback");
const successDesc = document.querySelector(".success-desc");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (!emailInput.validity.valid) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    invalidFeedback.style.display = "flex";
    validFeedback.style.display = "none";
  } else {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    invalidFeedback.style.display = "none";
    validFeedback.style.display = "flex";

    signUpSection.style.display = "none";
    sectionSuccess.style.display = "initial";

    successDesc.innerHTML = `A confirmation email has been sent to
            <b>${emailInput.value}.</b> Please open it and click the button
            inside to confirm your subscription.`;

    const dismissBtn = document.querySelector(".dismiss-btn");

    dismissBtn.addEventListener("click", () => {
      signUpSection.style.display = "flex";
      sectionSuccess.style.display = "none";
    });
  }
});
