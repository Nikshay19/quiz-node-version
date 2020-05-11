$(document).on('click', '.altchoice', (e) => {
    const alternativeChoice = $(e.currentTarget).text();
    const userdesireddifficulty = $(e.currentTarget).attr('data-dif');
    const token = localStorage.getItem('access-token');
    $.ajax({
        type: "POST",
        url: "http://localhost:4000/loaduseralternativechoice?token=" + token + "",
        data: {
            useraltchoice: alternativeChoice,
            userprefdif: userdesireddifficulty
        },
        dataType: "JSON",
        success: function(response) {
            if (!response.output.status) {
                $('.alertinfo').hide();
                $('.dataloadcontainer').html(response.output)
            } else {
                console.log(response);
            }

        }
    });
});