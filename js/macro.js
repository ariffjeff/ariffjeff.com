$(document).ready(function() {
  var folder = "img/macro";
  $.ajax({
    url : folder,
    success: function (data) {
      // add images to html
      $(data).find("a").attr("href", function (i, val) {
        if( val.match(/\.(jpe?g|png|gif|webp)$/) ) { 
          var filename = val.replace(/^.*[\\\/]/, '')
          $("#macroGrid").append("\
          <a href='" + folder + "/high/" + filename + "'>\
          <picture>\
          <source type='image/webp' srcset='" + val + "'/>\
          <source type='image/jpg' srcset='" + val + "'/>\
          <img src='" + val + "' alt='" + filename + "'>\
          </picture>\
          </a>\
          ");
        }
      });
    }
  });
});