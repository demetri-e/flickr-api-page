// flickr Category 1
$(function() {
    //JSON, $.getJSON()
   var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   $.getJSON(flickrApiUrl, {
       //options
        tags: "travel, travel and leisure, travel photography",
        tagmode: "any",
        format: "json"
   }).done(function(data) {
       //success
       console.log(data);
       $.each(data.items, function(index, item) {
        console.log(item);

        var link = $("<a target='_blank'>").attr("href", item.link).appendTo('#flickr');
        $("<img class='gal-img'>").attr("src", item.media.m).appendTo(link);
  
        if (index == 24) {
            return false;
        }
       });
   }).fail(function() {
       //failure
       alert("Ajax call failed");
   })
});

//Flickr Category 2
$(function() {
    //JSON, $.getJSON()
   var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   $.getJSON(flickrApiUrl, {
       //options
        tags: "still life, still life photography",
        tagmode: "any",
        format: "json"
   }).done(function(data) {
       //success
       console.log(data);
       $.each(data.items, function(index, item) {
        console.log(item);
        var link = $("<a target='_blank'>").attr("href", item.link).appendTo('#flickr2');
        $("<img class='gal-img'>").attr("src", item.media.m).appendTo(link);
        if (index == 24) {
            return false;
        }
       });
   }).fail(function() {
       //failure
       alert("Ajax call failed");
   })
});

//Flickr Category 3
$(function() {
    //JSON, $.getJSON()
   var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   $.getJSON(flickrApiUrl, {
       //options
        tags: "monochrome",
        tagmode: "any",
        format: "json"
   }).done(function(data) {
       //success
       console.log(data);
       $.each(data.items, function(index, item) {
        console.log(item);
        var link = $("<a target='_blank'>").attr("href", item.link).appendTo('#flickr3');
        $("<img class='gal-img'>").attr("src", item.media.m).appendTo(link);
        if (index == 24) {
            return false;
        }
       });
   }).fail(function() {
       //failure
       alert("Ajax call failed");
   })
});

//Flickr Category 4
$(function() {
    //JSON, $.getJSON()
   var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   $.getJSON(flickrApiUrl, {
       //options
        tags: "landscape, landscape photography",
        tagmode: "any",
        format: "json"
   }).done(function(data) {
       //success
       console.log(data);
       $.each(data.items, function(index, item) {
        console.log(item);
        var link = $("<a target='_blank'>").attr("href", item.link).appendTo('#flickr4');
        $("<img class='gal-img'>").attr("src", item.media.m).appendTo(link);
        
        if (index == 24) {
            return false;
        }
       });
   }).fail(function() {
       //failure
       alert("Ajax call failed");
   })
});