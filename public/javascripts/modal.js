var modal = function(JQ){
  var _modal = JQ(".modal");
  return {
    close: function(){ JQ(_modal).hide(); },
    show: function(){ JQ(_modal).show(); }
  };
}($);

$("#call-modal").click(function() { modal.show() });
$("#close-modal").click(function() { modal.close() });