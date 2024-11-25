$(document).ready(function() {
    $('.account-specify-form input').on('input', function() {
        let isEmpty = $(this).val().trim() === "";
        $('#continueButton').toggleClass('disabled', isEmpty);
    });

    $('.account-username-input').on('input', function() {
        // Get the input value
        let username = $(this).val().trim();
        // Update the text in the span
        $('.username-display').text(username);
    });

    $('.popup-form-submit').click(function() {
        let formSelector = $(this).attr('data-form'); // Get the selector string
        let form = $(formSelector); // Select the form element using the selector
        form.submit(); // Submit the form
    });

    $(".max-three").select2({
        maximumSelectionLength: 3
    });
});

function copyTag(button) {
    // Get the tag value
    const tag = button.getAttribute('data-tag');
    const copiedText = button.getAttribute('data-copied-text');
    const originalText = button.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(tag).then(() => {
        // Change button text to copied text
        button.textContent = copiedText;

        // Revert back after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

$('.show_example').click(function(){
    $('.tag-exampple-image').fadeToggle();
})

// Format options
var optionFormat = function(item) {
    if ( !item.id ) {
        return item.text;
    }

    var span = document.createElement('span');
    var imgUrl = item.element.getAttribute('data-kt-select2-user');
    var template = '';

    template += '<img src="' + imgUrl + '" class="rounded-circle h-20px me-2" alt="image"/>';
    template += item.text;

    span.innerHTML = template;

    return $(span);
}

// Init Select2 --- more info: https://select2.org/
$('.account-selector-select').select2({
    templateSelection: optionFormat,
    templateResult: optionFormat
});

$('.currency-select').on('change', function(){
    $(this).parents('.price-list-accordion-form').find('input[type="number"]').next('.input-group-text').text($(this).val())
});

$(document).ready(function () {
    // Event listener for checkbox change
    $('#hide_inputs').change(function () {
      if ($(this).is(':checked')) {
        $('.hidden-price-inp').fadeOut(); // Hide elements
      } else {
        $('.hidden-price-inp').fadeIn(); // Show elements
      }
    });
  });

 
  document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".valid-form");
      const submitButton = form.querySelector("button[type='submit']");
      
      function validateForm() {
          let hasErrors = false;
  
          form.querySelectorAll(".required").forEach((group) => {
              const input = group.querySelector(".form-control");
              if (input) {
                  if (input.value.trim() === "") {
                      group.classList.add("has-error");
                      hasErrors = true;
                  } else {
                      group.classList.remove("has-error");
                  }
              }
          });
  
          // Disable submit button if there are errors
          if (submitButton) {
              submitButton.disabled = hasErrors;
          }
      }
  
      // Add event listener to validate inputs on typing
      form.querySelectorAll(".form-control").forEach((input) => {
          input.addEventListener("input", () => {
              const group = input.closest(".required");
              if (group) {
                  if (input.value.trim() === "") {
                      group.classList.add("has-error");
                  } else {
                      group.classList.remove("has-error");
                  }
              }
              validateForm();
          });
      });
  
      // Remove 'disabled' attribute when 'get_code' is clicked
      const getCodeButton = document.getElementById("get_code");
      if (getCodeButton) {
          getCodeButton.addEventListener("click", () => {
              const relatedInput = getCodeButton.closest(".input-group").querySelector(".form-control");
              if (relatedInput) {
                  relatedInput.removeAttribute("disabled");
                  relatedInput.focus();
              }
          });
      }
  
      // Initial validation
      validateForm();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".change_password_form");
    const inputs = form.querySelectorAll("input");
    const submitButton = form.querySelector('button[type="submit"]');

    // Helper function to check password matching
    const checkPasswordsMatch = () => {
        const newPassword = form.querySelector('input[name="new_password"]').value.trim();
        const repeatPassword = form.querySelector('input[name="repeat_password"]').value.trim();
        const notMatchingFeedback = form.querySelector(".invalid-feedback.not-matching");
        const emptyRepeatPasswordFeedback = form.querySelector(".invalid-feedback.empty-repeat-password");

        // Reset feedback
        notMatchingFeedback.style.display = "none";
        emptyRepeatPasswordFeedback.style.display = "none";

        if (!repeatPassword) {
            emptyRepeatPasswordFeedback.style.display = "block";
            return false;
        }

        if (newPassword !== repeatPassword) {
            notMatchingFeedback.style.display = "block";
            return false;
        }

        return true;
    };

    // Main validation function
    const validateForm = () => {
        let isValid = true;

        inputs.forEach(input => {
            const value = input.value.trim();
            const feedback = input.closest(".fv-row").querySelector(".invalid-feedback");

            // Toggle feedback visibility
            if (!value) {
                feedback.style.display = "block";
                isValid = false;
            } else {
                feedback.style.display = "none";
            }
        });

        // Check password matching separately
        if (!checkPasswordsMatch()) {
            isValid = false;
        }

        // Enable or disable the submit button based on form validity
        submitButton.disabled = !isValid;
    };

    // Add input event listeners to validate in real-time
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            validateForm();
        });
    });

    // Initial validation on load
    validateForm();

    // Prevent form submission if invalid
    form.addEventListener("submit", (event) => {
        validateForm();
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
});