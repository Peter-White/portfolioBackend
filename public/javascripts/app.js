$(document).ready(function() {

  var $submit = $('.submit');
  var $desktop = $('.desktop');
  var $mobile = $('.mobile');

  function setBoolean(selector){
    if(selector.val() === "true") {
      return true;
    } else {
      return false;
    }
  }

  function boxCheck() {
    var checkedArray = [];
    $.each($("input:checkbox:checked"), function(){
      checkedArray.push($(this).val());
    });
    if(checkedArray.length === 0) {
      return "error";
    } else {
    return checkedArray;
    }
  };
  function validate() {
    var $input = $("input:text");
    for(var i = 0; i < $input.length; i++) {
      if($input[i].value === "") {
        return false;
      }
    }
    return true;
  };

  $submit.click(function(event) {
    /* Act on the event */
    event.preventDefault();
    console.log(validate());
    console.log(boxCheck());
    console.log($("textarea").val());
    console.log(setBoolean($desktop));
    console.log(setBoolean($mobile));
    // console.log(validate());
  });


});

