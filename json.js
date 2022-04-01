$().ready(function(){
    $.getJSON( "/json.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
