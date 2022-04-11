export const getDay = ()=>{
    const currentDate = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[currentDate.getDay()];
};

export const selectDay = (currentDay)=> {
    const days = document.getElementById("days").children;
        for (let i=0 ; i<days.length;i++){
            if(days[i].getAttribute("dataname")===currentDay){
                days[i].style.backgroundColor="#e49119";
                days[i].style.color="#fbfbfb";
                days[i].style.boxShadow="0 3px 0 #bd750d";
            };
        };
};

export const showEachDayANDBackgroundColorHandler = event =>{
    const day = event.target.attributes[0].nodeValue;
    document.getElementById("Sunday").style.display="none";
    document.getElementById("Monday").style.display="none";
    document.getElementById("Tuesday").style.display="none";
    document.getElementById("Wednesday").style.display="none";
    document.getElementById("Thursday").style.display="none";
    document.getElementById("Friday").style.display="none";
    document.getElementById("Saturday").style.display="none";
    document.getElementById(day).style.display="block" ;

    const childrenArray = event.target.parentElement.children;
    const selected = event.target ;
    for (let i=0 ; i<childrenArray.length;i++) {
        childrenArray[i].style.backgroundColor="";
        childrenArray[i].style.color="grey";
        childrenArray[i].style.boxShadow="";
        selected.style.backgroundColor="#e49119";
        selected.style.color="#fbfbfb";
        selected.style.boxShadow="0 3px 0 #bd750d";
    }
};