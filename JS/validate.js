
document.addEventListener('DOMContentLoaded', function() {
    const inputName = document.getElementById('nameInput');
    const urlInput = document.getElementById('urlInput');
    const submitBtn = document.getElementById('submitBtn');

    inputName.addEventListener('input', function() {
        validateName(inputName);
    });

    urlInput.addEventListener('input', function() {
        validateURL(urlInput);
    });

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateInputs()) {
            clearForm();
        }
    });

    function validateInputs() {
        const nameValid = validateName(inputName);
        const urlValid = validateURL(urlInput);
        return nameValid && urlValid;
    }

    function validateName(nameInput) {
        const nameValidationIcon = document.getElementById('nameValidationIcon');
        if (!nameInput.value.trim() || !/^[a-zA-Z0-9\s]+$/.test(nameInput.value)) {
            nameInput.classList.remove('valid');
            nameInput.classList.add('invalid');
            nameValidationIcon.classList.remove('fa-circle-check','fa-regular','text-success');
            nameValidationIcon.classList.add('fa-exclamation-circle','fa-solid', 'text-danger');
            return false;
        } else {
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            nameValidationIcon.classList.remove('fa-exclamation-circle','fa-solid', 'text-danger');
            nameValidationIcon.classList.add('fa-circle-check','fa-regular','text-success');
            return true;
        }
    }

    function validateURL(urlInput) {
        const urlValidationIcon = document.getElementById('urlValidationIcon');
        if (!isValidURL(urlInput.value)) {
            urlInput.classList.remove('valid');
            urlInput.classList.add('invalid');
            urlValidationIcon.classList.remove('fa-circle-check','fa-regular','text-success');
            urlValidationIcon.classList.add('fa-exclamation-circle','fa-solid', 'text-danger');
            return false;
        } else {
            urlInput.classList.remove('invalid');
            urlInput.classList.add('valid');
            urlValidationIcon.classList.remove('fa-exclamation-circle','fa-solid', 'text-danger');
            urlValidationIcon.classList.add('fa-circle-check','fa-regular','text-success');
            return true;
        }
    }

    function isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    function clearForm() {
        inputName.value = '';
        urlInput.value = '';
        inputName.classList.remove('valid', 'invalid');
        urlInput.classList.remove('valid', 'invalid');
        document.getElementById('nameValidationIcon').classList.remove('fa-circle-check','fa-regular','text-success', 'fa-exclamation-circle','fa-solid', 'text-danger');
        document.getElementById('urlValidationIcon').classList.remove('fa-circle-check','fa-regular','text-success', 'fa-exclamation-circle','fa-solid', 'text-danger');
    }
});


  
