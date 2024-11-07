
    // Define form element
const form = document.getElementById('account-verify-form2');

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validator = FormValidation.formValidation(
    form,
    {
        fields: {
            'topic': {
                validators: {
                    notEmpty: {
                        message: 'Please select an optiion'
                    }
                }
            },
            'switch': {
                validators: {
                    notEmpty: {
                        message: 'Please check this input'
                    }
                }
            },
            'language': {
                validators: {
                    notEmpty: {
                        message: 'Please select an option'
                    }
                }
            },
        },

        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
    
);

$(form.querySelector('[name="topic"]')).on('change', function() {
    // Revalidate the field when an option is chosen
    validator.revalidateField('topic');
});
$(form.querySelector('[name="language"]')).on('change', function() {
    // Revalidate the field when an option is chosen
    validator.revalidateField('language');
});
$(form.querySelector('[name="switch"]')).on('change', function() {
    // Revalidate the field when an option is chosen
    validator.revalidateField('switch');
});
// Submit button handler
const submitButton = document.getElementById('acc_verification-submit');
submitButton.addEventListener('click', function (e) {
    // Prevent default button action
    e.preventDefault();

    // Validate form before submit
    if (validator) {
        validator.validate().then(function (status) {
            console.log('validated!');

            if (status == 'Valid') {
                // Show loading indication
                submitButton.setAttribute('data-kt-indicator', 'on');

                // Disable button to avoid multiple click
                submitButton.disabled = true;

                // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                setTimeout(function () {
                    // Remove loading indication
                    submitButton.removeAttribute('data-kt-indicator');

                    // Enable button
                    submitButton.disabled = false;

                    // Show popup confirmation
                    // Swal.fire({
                    //     text: "Form has been successfully submitted!",
                    //     icon: "success",
                    //     buttonsStyling: false,
                    //     confirmButtonText: "Ok, got it!",
                    //     customClass: {
                    //         confirmButton: "btn btn-primary"
                    //     }
                    // });

                    form.submit(); // Submit form
                }, 2000);
            }
        });
    }
});
