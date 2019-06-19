var dragnode = {
    _JQ: undefined,
    _conector: undefined,
    _node_class: undefined,
    init: function(JQ, conector, node_class){
      this._conector = conector;
      this._node_class = node_class;
      this._JQ = JQ;
      this.generate();
    },
    generate: function(){
      let _this = this;
      _this._JQ(`${_this._conector}`).sortable({ revert: true });
      _this._JQ(`.${_this._node_class}`).draggable({
        connectToSortable: _this._conector,
        revert: "invalid",
        opacity: 0.7, 
        start: function( event, ui ) { _this._JQ(this).addClass('task-dragging');  },
        stop: function( event, ui ) { _this._JQ(this).removeClass('task-dragging'); }
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
      this.generate();
    },
    edit: function(template,data_template,click_event){
      let inner_template = document.createElement("template");
      inner_template.innerHTML = data_template;
      data_template = inner_template.content.firstChild;
      template.innerHTML = data_template.innerHTML;
      template.removeEventListener("click",function(){});
      template.addEventListener("click", click_event);
    }
}