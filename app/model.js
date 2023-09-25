//var parentPage = "";
export function changePage(pathArray){ 
   //console.log("mvc");
    $("#bread-crumb").html(``);

    if (pathArray == ""){
      //  $("#app").html("home");
        $.get(`pages/home.html`, (data) => {
            $("#app").html(data);
        }).fail(() => {
            console.log("failed");
        });
    } else {
        
        if (pathArray.length == 1){
            $.get(`pages/${pathArray}.html`, (data) => {
                if (data){
                    $("#app").html(data);
                } else {
                    alert("page not found")
                }
        }).fail(() =>{
            console.log("page not found");
        });
    }else {
        $("#bread-crumb").html(`<a href="#${pathArray[0]}">${pathArray[0]}</a> / ${pathArray[1]}`);
        $.get(`pages/${pathArray[1]}.html`, (data) =>{
            if (data){
                $("#app").html(data);
            }else {
                alert("page not found");
            }
        }).fail(() => {
            console.log("page not found");
        });
    }
}

}