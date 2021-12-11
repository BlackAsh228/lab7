let j=0, mobile_menu = document.getElementById("mobile_menu_container");;
function scroll_up(){
    document.querySelector("body").scrollIntoView({
    behavior: 'smooth',
    block: "start"
    })
};
function scroll_down(){
    document.querySelector("#article_1").scrollIntoView({
    behavior: 'smooth',
    block: "center"
    })
};

function open_close_menu(){
    if(j==0){
        mobile_menu.style.setProperty("display","flex");
        j+=1
    }
    else{ 
        mobile_menu.style.setProperty("display","none")
        j-=1;
    };
};
function go_to_main(){
    document.location.href ="index.html";     
};

function go_to_void(){
    mobile_menu.style.setProperty("display","none");
    j-=1;
    document.querySelector("#image_container_2 a img[alt=void]").scrollIntoView({
    behavior: 'smooth',
    block: "center"
    })
};

function go_to_cosmomen(){
    mobile_menu.style.setProperty("display","none");
    j-=1;
    document.querySelector("#image_container_2 a img[alt=cosmomen]").scrollIntoView({
    behavior: 'smooth',
    block: "center"
    })
};

function go_to_sun(){
    mobile_menu.style.setProperty("display","none");
    j-=1;
    document.querySelector("#image_container_2 a img[alt=sun_system]").scrollIntoView({
    behavior: 'smooth',
    block: "center"
    })
};