$(document).on('click', '#sectionlink', (e) => {
    const token = localStorage.getItem('access-token');
    const getsubject = $(e.currentTarget).attr('data-sub');
    const getchapter = $(e.currentTarget).attr('data-chap');
    const getdifficulty = $(e.currentTarget).attr('data-dif');
    const getsection = $(e.currentTarget).attr('data-sec');
    if (!token) {
        window.location.href = "http://localhost:4000/"
    } else {
        window.location.href = "http://localhost:4000/quizitup?token=" + token + "&subject=" + getsubject + "&chapter=" + getchapter + "&difficulty=" + getdifficulty + "&section=" + getsection + "&id=0";
    }
});