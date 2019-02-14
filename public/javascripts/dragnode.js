$("div[id^='box-task-'], .table-div").sortable({ revert: true });
$(".task").draggable({
    connectToSortable: "div[id^='box-task-'], .table-div",
    revert: "invalid",
    opacity: 0.7, 
    start: function( event, ui ) { $(this).addClass('task-dragging');  },
    stop: function( event, ui ) { $(this).removeClass('task-dragging'); }
});
// $(".modal").show();