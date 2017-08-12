var list = document.getElementById("gallery");

var editableList = Sortable.create(list, {
  filter: '.js-remove',
  onFilter: function (evt) {
    var el = editableList.closest(evt.item); // get dragged item
    el && el.parentNode.removeChild(el);
  }
});