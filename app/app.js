import { changePage } from "./model.js";

function route (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let path = pageID.split("/");
  console.log("hash ", hashTag);
   console.log("page name " + pageID);
   console.log("sub page name ", path);
  changePage(path);
   
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