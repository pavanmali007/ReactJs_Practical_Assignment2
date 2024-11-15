$(document).ready(function() {
    // que1
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    function isValidName(name) {
        if(name.length >= 2){
            return true;
        } else{return false};
    }

    $('#email').on('change', ()=>{
        if(!isValidEmail($('#email').val())){
            console.log('email is invalid');
            $('#error_email').text("please enter valid email");
            $('#error_email').css("display", "block")
        } else{
            $('#error_email').css("display", "none")
            console.log('email is valid');
        }
    })

    $('#name').on('change', ()=>{
        if(!isValidName($('#name').val())){
            console.log('name is invalid');
            $('#error_name').text("name must contain at least 2 characters")
            $('#error_name').css("display", "block");
        } else{
            $('#error_name').css("display", "none");
            console.log('name is valid');
        }
    });

    $('#myForm').submit(function(event) {
        
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        if (name === '') {
            alert('Please enter your name.');
            $('#error_name').css("display", "block")
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            $('#error_email').css("display", "block")
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Form Data:\nName: ' + name + '\nEmail: ' + email);
    });


    // que2
    var cities = {
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur']
    };

    $('#state').change(function() {
        var selectedState = $(this).val();
        var cityOptions = '<option value="">Select City</option>'; // Default option

        if (selectedState) {
            cities[selectedState].forEach(function(city) {
                cityOptions += '<option value="' + city + '">' + city + '</option>';
            });
        }
        $('#city').html(cityOptions);
    });

    // que3
    $('#toggleButton').click(function() {
        $('#myDiv').toggle();
    });

    // que4
    var currentImageIndex = 0;
    var images = $('#slider img');
    var totalImages = images.length;
    function showImage(index) {
        images.removeClass('active').hide();
        images.eq(index).addClass('active').fadeIn();
    }

    $('#nextBtn').click(function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    });
        
    $('#prevBtn').click(function() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    });
        
    // que5
    $('#simpleSubmitBtn').click(function(event) {
        
        event.preventDefault();
        $('#simpleNameError').text('');
        let name = $('#simpleName').val();
        if (name === '') {
            $('#simpleNameError').text('Please enter your name.');
        } else {
            alert('Form submitted successfully!');
        }
    });      
});


