$(document).ready(function() {

  $("#upload-file-field").mouseout( function () {
    let file_name = $("#upload-file-field").val().replace(/C:\\fakepath\\/i, '');
    $("#input-box").attr("value",file_name);
  });

  $("#file-button").mousemove( function() {
    let file_name = $("#upload-file-field").val().replace(/C:\\fakepath\\/i, '');
    $("#input-box").attr("value",file_name);
  });

  $("#file-button").click (function () {
      $("#upload-file-field").trigger("click");
  });
});