$(document).ready(function() {

  var $desktop = $('.desktop');
  var $mobile = $('.mobile');
  var $input = $("input:text");
  var $textarea = $("textarea");
  var $message = $('.message');

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
    var arrString = checkedArray.join(", ")
    return arrString;
    }
  };
  function validate() {
    for(var i = 0; i < $input.length; i++) {
      if($input[i].value === "") {
        return false;
      }
    }
    if(boxCheck() === "error") {
      return false;
    }
    if($textarea.val() === "") {
      return false;
    }
    return true;
  };

  $('form').submit(function(event){
    event.preventDefault();
    if(validate() === true) {
      $message.html('<h3>Success<h3>');

      var postValues = {
        title: $input[0].value,
        image: $input[1].value,
        summary: $textarea.val(),
        technologies: boxCheck(),
        url: $input[2].value,
        github: $input[3].value,
        desktop: setBoolean($desktop),
        mobile: setBoolean($mobile)
      };
      console.log(postValues);
      $.post('/projects', postValues, function(response, status) {
        // optional stuff to do after success
        $input.val('');
        $textarea.val('');
      }, 'json');
    } else {
      $message.html('<h3>Validation Failed<h3>');
    }
  });
});

