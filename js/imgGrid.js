// loads images from local dev dir. Copy created html from Inspect Element, paste into html file.
// REMEMBER TO UNCOMMENT <script> TAG IN HTML
$(function() {
  var folder = "img/design";
  $.ajax({
    url : folder,
    success: function (data) {
      // add images to html
      // data in this case is the entire html doc of the location of folder
      // val: dir + filename + ext
      var files = []
      $(data).find("a").attr("href", function (i, val) { // loop over all img dir anchors
        if(val.match(/\.(jpe?g|png|gif|webp)$/)) {
          files.push(val.replace(/^.*[\\\/]/, ''))
        }
      });
      
      for(var i = 0; i < files.length;) {
        var source = "<source type='image/jpg' srcset='" + folder + "/" + files[i] + "'/>"
        var filename0 = files[i].replace(/\.[^/.]+$/, '')
        var filename1 = files[i+1].replace(/\.[^/.]+$/, '')
        var filename_priority = files[i] // jpg or webp
        if(filename0 == filename1) {
          source = "\
          <source type='image/webp' srcset='" + folder + "/" + files[i+1] + "'/>\
          <source type='image/jpg' srcset='" + folder + "/" + files[i] + "'/>\
          "
          filename_priority = files[i+1]
          i+=2
        } else {
          i++
        }
        
        $("#imgGrid").append("\
        <a href='" + folder + "/" + filename_priority + "'>\
        <picture>"
        + source + 
        "<img src='" + folder + "/" + filename_priority + "' alt='" + filename_priority + "'>\
        </picture>\
        </a>\
        ");
        
      }
    }
  });
});

// only works with node.js 
// https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript
// var moduleName = 'require';
// require([moduleName], function(fs){
//     // var files = fs.readdirSync('/img/macro/');
//     alert(files)
// })
