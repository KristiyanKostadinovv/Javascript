//current date

function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    const output = `${day}/${month}/${year}`;
    console.log(output);
}

getDate();