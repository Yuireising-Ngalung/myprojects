const date_time = () =>{
    const now = new Date();

    //Date- Month, weekday and date
    document.getElementById("date").innerHTML = `
    ${now.toLocaleString('default',{month:'long'})}, 
    ${now.toLocaleString('default',{weekday:'long'})}
    ${now.getDate()}`;

    // Time - Hours, Minutes and Seconds
    console.log(now.toLocaleTimeString());
    document.getElementById("time").innerHTML =`${now.toLocaleTimeString()}`;
}

setInterval(date_time,1000);

//date_time();