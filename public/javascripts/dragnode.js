var dragnode = {
    generate: function(JQ, conector, node_class){
      JQ(`${conector}`).sortable({ revert: true });
      JQ(`.${node_class}`).draggable({
        connectToSortable: conector,
        revert: "invalid",
        opacity: 0.7, 
        start: function( event, ui ) { JQ(this).addClass('task-dragging');  },
        stop: function( event, ui ) { JQ(this).removeClass('task-dragging'); }
      });
    },
    create: function(pool_id,data_template,click_event){
      let template = document.createElement("template");
      template.innerHTML = data_template;
      template = template.content.firstChild;
      document.getElementById(pool_id).append(template);
      if(click_event != undefined){
        template.addEventListener("click",click_event);
      }
    }
}