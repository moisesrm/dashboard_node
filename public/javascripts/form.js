function Form(){
  var _form = {};
  var _error_template = "";
  return {
    init: function(form_id){
      let form = document.getElementById(`${form_id}`);
      let fields = form.querySelectorAll('input,select');
      _error_template = document.getElementById("error-template").innerHTML;
      _form["form"] = form;
      fields.forEach(function(el){
        if(el.name != ""){ _form[el.name] = el; }
      });
    },
    edit: function(){
      
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
      let template = document.getElementById("task-template").innerHTML;
      for(var tag in _form) { 
        let el = _form[tag];
        if(el.name != undefined){
          template = template.replace(`#${tag}#`, el.value);
        }
      };

      let click_event = function(){ console.log(this); };
      dragnode.create("task-new", template, click_event);
      this.reset();
 
    },
  };
};

function save(form_id, callback){
  var form = new Form;
  form.init(form_id);
  form.save();

  if(callback != undefined){
    callback();
  }else{

    //Apply Dragnode
    let connector = "div[id^='box-task-'], .table-div";
    let node_class = "task";
    dragnode.generate($, connector, node_class);
    
    modal.close();
  }
};