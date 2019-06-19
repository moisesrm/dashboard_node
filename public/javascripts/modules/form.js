function Form(){
  var _JQ = undefined;
  var _form = {};
  var _url_save = "";
  var _error_template = "";
  return {
    init: function(form_id,JQ,url){
      let form = document.getElementById(`${form_id}`);
      let fields = form.querySelectorAll('input,select');
      _JQ = JQ;
      _url_save = `${url}/save`;
      _error_template = document.getElementById("error-template").innerHTML;
      _form["form"] = form;
      fields.forEach(function(el){
        if(el.name != ""){ _form[el.name] = el; }
      });
    },
    edit: function(data){
      for(var tag in data) { 
        _form[tag].value = data[tag];
      };
    },
    reset: function(){
      for(var tag in _form) { 
        let el = _form[tag];
        if(el.name == undefined){ return true; }
        switch(el.type){
          case("text"): { el.value = ""; break; }
          case("select-one"): { el.selectedIndex = 0; break; }
        }
      }
    },
    save: function(){
      let data = {};
      let _this = this;
      for(var tag in _form) { 
        let el = _form[tag];
        if(el.name != undefined){ data[tag] = el.value; }
      };

      _JQ.ajax({
        url: _url_save,
        method: "post",
        data: data,
      }).done(function(res){
        console.log(res);
        // if(res.success){
        //   _this.reset();
        //   return data;
        // }else{
          
        // }
      }).fail(function(){

      });
    },
  };
};
