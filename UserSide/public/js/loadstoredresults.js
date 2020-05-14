$(document).ready(function() {
    const token = localStorage.getItem('access-token')
    if (!token) {
        window.location.href = "http://localhost:4000/"
    } else {
        $.ajax({
            type: "GET",
            url: "http://localhost:4000/loadstoredresults?token=" + token + "",
            dataType: "JSON",
            success: function(response) {

            }
        });
    }
});