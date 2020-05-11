$(document).on('click', '.dropdown-item', (e) => {
    const token = localStorage.getItem('access-token');
    const diff = $(e.currentTarget).text();
    $.ajax({
        type: "POST",
        url: "http://localhost:4000/loadqdataondif?token=" + token + "",
        data: {
            difficulty: diff
        },
        dataType: "JSON",
        success: function(response) {
            $('.dataloadcontainer').html(response.output)

        }
    });
})