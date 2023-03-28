
$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        // Add your code here
        $('#transform').hide();
        $('#restore').show();
        $("h1").text("The Butterfly");
        $("#p1").html("This is a <strong>butterfly</strong> in it's natural habitat:")
        $("img").attr("src", "https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/build/images/animals/butterfly.png");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Butterfly");
        $("a").text("Butterfly");  
        $("#p1").addClass("butterfly"); 

        var newList = $("<ul>");
        newList.html(`<li>There are more than 20,000 species of butterflies.</li><li>Butterflies have up to 12,000 eyes.</li><li>Butterflies live only a few weeks.</li><li>Butterflies use their feet to taste.</li>`);

        newList.addClass("list");
        $("body").append(newList);
    });

    $('#restore').on('click', function() {
        location.reload(true); 
    }); 

});



