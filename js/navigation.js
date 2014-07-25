function createDropDown(element) {
  this.listItemElement = element;
}
createDropDown.prototype.bindEvents = function() {
  this.listItemElement.hover(function() {
    $(this).find("ul")
      .show()
        .addClass("hover");
  },
  function() {
    $(this).find("ul")
      .hide() 
        .removeClass("hover");    
  });
};

$(document).ready(function() {
  var dropDownObj = new createDropDown($("#nav li"));
  dropDownObj.bindEvents();
});