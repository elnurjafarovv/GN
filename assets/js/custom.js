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