function createDropDown(getElement) {
  this.listItemElement = getElement;
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
  var listItemElement = $("#nav li");
  var createDropDownObj = new createDropDown(listItemElement);
  createDropDownObj.bindEvents();
});