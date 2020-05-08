$(document).on("click", "#login", (e) => {
    const email = $('#logemail').val().trim();
    const pass = $('#password').val().trim();
    $.ajax({
        url: "http://localhost:4000/checkuserexists",
        type: "POST",
        dataType: "JSON",
        data: {
            email: email,
            pass: pass
        },
        success: function(data, textStatus, request) {
            console.log(data)
            if (data.message === "authorised") {
                window.location.href = "http://localhost:4000/homepage"
            } else {
                $('.alertbox').show();
                $('.alertbox').text("User unauthorised");
            }
        }
    })
})