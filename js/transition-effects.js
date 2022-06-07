$(".btn-frist-section").click(function() {
  $("#first-section").slideUp(900, function(){
     $("#second-section").slideDown(900);
  });
});

$(".btn-secod-section").click(function() {
  $("#second-section").slideUp(900, function(){
     $("#third-section").slideDown(900);
  });
});

$(".btn-third-section").click(function() {
  $("#third-section").slideUp(900, function(){
     $("#fourth-section").slideDown(900);
  });
});
