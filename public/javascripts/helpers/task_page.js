//IMPORT
document.writeln('<script src="/javascripts/modules/modal.js"></script>');
document.writeln('<script src="/javascripts/modules/dragnode.js"></script>');
document.writeln('<script src="/javascripts/modules/form.js"></script>');

window.onload = function(){
  let connector = "div[id^='box-task-'], .table-div";
  let node_class = "task";
  dragnode.init($, connector, node_class);
}

var template = undefined;

//PAGE
function loadn(){
  
}

function save(form_id){
  var form = new Form;
  form.init(form_id,$,"tasks");
  let data = form.save();

  //Apply Dragnode
  data_template = document.getElementById("task-template").innerHTML;
  for(let tag in data){
    data_template = data_template.replace(`#${tag}#`, data[tag]);
  }

  if(template != undefined){
    let click_event = function(){ 
      form.edit(data); 
      template = this;
      modal.show();
    };

    dragnode.edit(template, data_template, click_event);
    template = undefined;
    modal.close();
    return true;
  }

  let click_event = function(){ 
    form.edit(data); 
    template = this;
    modal.show();
  };
  dragnode.create("task-new", data_template, click_event);
  modal.close();

};


$("#call-modal").click(function() { modal.show() });
$("#close-modal").click(function() { modal.close() });