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