// Dark Mood Functions
export const dorpDownShowHandler = () => {
    const signInContainer = document.getElementById("signInContainer");
    signInContainer.style.display = "block";
}
export const dorpDownHideHandler = () => {
    const signInContainer = document.getElementById("signInContainer");
    signInContainer.style.display = "none";
}
export const darkMoodHandler = () => {
    const darkMoodSlider = document.getElementById("darkMoodSlider");
    const darkMoodContainer = document.getElementById("darkMoodContainer");
    const sideDarkMoodSlider = document.getElementById("sideDarkMoodSlider");
    const sideDarkMoodContainer = document.getElementById("sideDarkMoodContainer");
    if(darkMoodSlider.getAttribute("darkmoodtoggle") === "off"){
        darkMoodSlider.style.left = "46px";
        darkMoodContainer.style.backgroundColor= "#343a40";
        sideDarkMoodSlider.style.left = "46px";
        sideDarkMoodContainer.style.backgroundColor= "#343a40";
        document.body.style.backgroundColor="#19191b";
        
        document.getElementById("headerContainer").style.backgroundColor="#46464a";
        document.querySelectorAll(".menuItem").forEach(item => item.style.color="#cacaca");

        document.querySelectorAll(".itemContainer").forEach(item => item.style.backgroundColor="#46464a");
        document.querySelectorAll(".postItem").forEach(item => item.style.backgroundColor="#46464a");
        document.querySelectorAll(".postTitle").forEach(item => item.style.color="#fff");
        document.getElementById("weeklyContainer").style.backgroundColor="#333338";
        document.querySelectorAll(".dayItem").forEach(item => item.style.color="grey");

        darkMoodSlider.setAttribute("darkmoodtoggle", "on");
        sideDarkMoodSlider.setAttribute("sidedarkmoodtoggle", "on");

    } else if (darkMoodSlider.getAttribute("darkmoodtoggle") === "on"){
        darkMoodSlider.style.left = "5px";
        darkMoodContainer.style.backgroundColor= "#f3f3f3";
        sideDarkMoodSlider.style.left = "5px";
        sideDarkMoodContainer.style.backgroundColor= "#f3f3f3";
        document.body.style.backgroundColor="#f3f3f3";

        document.getElementById("headerContainer").style.backgroundColor="#fff";
        document.querySelectorAll(".menuItem").forEach(item => item.style.color="#6b6b6b");

        document.querySelectorAll(".dayContainer").forEach(item => item.style.backgroundColor="#f9f9f9");
        document.querySelectorAll(".itemContainer").forEach(item => item.style.backgroundColor="#f1f1f1");
        document.querySelectorAll(".postItem").forEach(item => item.style.backgroundColor="#f1f1f1");
        document.querySelectorAll(".postTitle").forEach(item => item.style.color="#000");
        document.getElementById("weeklyContainer").style.backgroundColor="#fff";
        document.querySelectorAll(".dayItem").forEach(item => item.style.color="#6b6b6b");


        darkMoodSlider.setAttribute("darkmoodtoggle", "off");
        sideDarkMoodSlider.setAttribute("sidedarkmoodtoggle", "off");
    }
};

export const sideHeaderShow = () => {
    document.getElementById('sideMenu').style.right=0;
}

export const sideHeaderHide = () => {
    document.getElementById('sideMenu').style.right="-500px";
}

export const sideDarkMoodHandler = () => {
    const sideDarkMoodSlider = document.getElementById("sideDarkMoodSlider");
    const sideDarkMoodContainer = document.getElementById("sideDarkMoodContainer");
    const darkMoodSlider = document.getElementById("darkMoodSlider");
    const darkMoodContainer = document.getElementById("darkMoodContainer");

    if(sideDarkMoodSlider.getAttribute("sidedarkmoodtoggle") === "off"){
        sideDarkMoodSlider.style.left = "46px";
        sideDarkMoodContainer.style.backgroundColor= "#343a40";
        darkMoodSlider.style.left = "46px";
        darkMoodContainer.style.backgroundColor= "#343a40";
        document.body.style.backgroundColor="#19191b";
        
        document.getElementById("headerContainer").style.backgroundColor="#46464a";
        document.querySelectorAll(".menuItem").forEach(item => item.style.color="#cacaca");

        document.querySelectorAll(".itemContainer").forEach(item => item.style.backgroundColor="#46464a");
        document.querySelectorAll(".postItem").forEach(item => item.style.backgroundColor="#46464a");
        document.querySelectorAll(".postTitle").forEach(item => item.style.color="#fff");
        document.getElementById("weeklyContainer").style.backgroundColor="#333338";
        document.querySelectorAll(".dayItem").forEach(item => item.style.color="grey");
        

        sideDarkMoodSlider.setAttribute("sidedarkmoodtoggle", "on");
        darkMoodSlider.setAttribute("darkmoodtoggle", "on");

    } else if (sideDarkMoodSlider.getAttribute("sidedarkmoodtoggle") === "on"){
        sideDarkMoodSlider.style.left = "5px";
        sideDarkMoodContainer.style.backgroundColor= "#f3f3f3";
        darkMoodSlider.style.left = "5px";
        darkMoodContainer.style.backgroundColor= "#f3f3f3";
        document.body.style.backgroundColor="#f3f3f3";

        document.getElementById("headerContainer").style.backgroundColor="#fff";
        document.querySelectorAll(".menuItem").forEach(item => item.style.color="#6b6b6b");

        document.querySelectorAll(".dayContainer").forEach(item => item.style.backgroundColor="#f9f9f9");
        document.querySelectorAll(".itemContainer").forEach(item => item.style.backgroundColor="#f1f1f1");
        document.querySelectorAll(".postItem").forEach(item => item.style.backgroundColor="#f1f1f1");
        document.querySelectorAll(".postTitle").forEach(item => item.style.color="#000");
        document.getElementById("weeklyContainer").style.backgroundColor="#fff";
        document.querySelectorAll(".dayItem").forEach(item => item.style.color="#6b6b6b");


        sideDarkMoodSlider.setAttribute("sidedarkmoodtoggle", "off");
        darkMoodSlider.setAttribute("darkmoodtoggle", "off");
    }
};