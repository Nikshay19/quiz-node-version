$(document).on('click', "#signupreg", (e) => {
    const name = $('#name').val().trim();
    const email = $('#signupemail').val().trim();
    const pass = $('#signuppassword').val().trim();
    $.ajax({
        url: "http://localhost:4000/saveuser",
        type: "POST",
        dataType: "JSON",
        data: {
            name: name,
            email: email,
            pass: pass
        },
        success: function(data) {
            if (data.message === "inserted") {
                window.location.href = "http://localhost:4000/homepage";
            } else {
                $('.alertbox').show();
                $('.alertbox').text("Email already exists")
            }
        }
    })
})