
    // Define form element
    const form = document.getElementById('kt_create_account_form');

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    var validator = FormValidation.formValidation(
        form,
        {
            fields: {
                'first_name': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'last_name': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'email': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'password': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'password_confrim': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'phone_number': {
                    validators: {
                        notEmpty: {
                            message: 'Please fill the input'
                        }
                    }
                },
                'toc': {
                    validators: {
                        notEmpty: {
                            message: 'Please check input'
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
    
    
    // Submit button handler
    const submitButton = document.getElementById('company-reg-submit');
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
    