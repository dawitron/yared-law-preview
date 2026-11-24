(function () {
  document.addEventListener("submit", function (event) {
    var form = event.target;

    if (!(form instanceof HTMLFormElement) || form.classList.contains("w-password-page")) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    form.style.display = "none";

    var wrapper = form.closest(".w-form");
    var successMessage = wrapper && wrapper.querySelector(".w-form-done");

    if (!successMessage) {
      successMessage = document.createElement("div");
      successMessage.className = "w-form-done";
      successMessage.textContent = "Thank you! Your submission has been received.";
      (wrapper || form.parentElement).appendChild(successMessage);
    }

    successMessage.style.display = "block";
  }, true);
})();
