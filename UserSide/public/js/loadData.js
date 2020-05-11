$(document).ready(function() {
    const token = localStorage.getItem('access-token');
    $.ajax({
        type: "GET",
        url: "http://localhost:4000/loadData?token=" + token + "",
        dataType: "JSON",
        success: function(response) {
            $('.dataloadcontainer').html(response.output)
        }
    });
});