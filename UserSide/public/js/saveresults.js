$(document).on('click', '#save', (e) => {
    var listdataArr = [];
    var getlistdata = document.getElementsByClassName('lgi');
    for (let index = 0; index < getlistdata.length; index++) {
        listdataArr.push(getlistdata[index].textContent)
    }
    const sample = JSON.stringify(listdataArr);
    console.log(sample);
    console.log(JSON.parse(sample))
});