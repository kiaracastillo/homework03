var parentPage = "";
export function changePage(pageName, subPage){
   
   console.log("mvc");
    $("#bread-crumb").html(``);

    if (pageName == ""){
      //  $("#app").html("home");
        $.get(`pages/home.html`, (data) => {
            $("#app").html(data);
        }).fail(() => {
            console.log("failded");
        });
    } else {
        
        $("#bread-crumb").html(`<a href="#${pageName}">${pageName}</a> /`);
        //$("#app").html("another page");

        $.get(`pages/${pageName}.html`, (data) => {
            if(data){
                $("#app").html(data);
            } else{
                alert("Page not found");
            }
           
        }).fail(() => {
            console.log("Page not found");
        });
    } 
    }



    ///app


    import { changePage } from "./model.js";

function route (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let subPage = pageID.split("/");
  console.log("hash ", hashTag);
   console.log("page name " + pageID);
   console.log("sub page name ", subPage);
  changePage(subPage);
   
}

function initListeners() {
    console.log("hello");
}

function initSite() {
   $(window).on("hashchange", route);
   route();
}

$(document).ready(function () {
    initListeners();
    initSite();  
});