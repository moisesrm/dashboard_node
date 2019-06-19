var modal = function(JQ){
  var _modal = JQ(".modal");
  return {
    close: function(){ JQ(_modal).hide(); },
    show: function(){ JQ(_modal).show(); }
  };
}($);
