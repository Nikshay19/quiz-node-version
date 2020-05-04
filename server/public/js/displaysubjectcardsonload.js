$(document).ready(e => {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/displaysubjectcard",
        dataType: "JSON",
        success: function(data) {
            $(".displaysubjects").html(data.output);
        }
    });
});