$(document).ready(function() {

  var projectAPI = "/projects";
  var projectOptions = {
    format: "json"
  };

  function displayProjects(data) {
    var projectHTML = '<div class="projectContainer">';
    $.each(data, function(i, project) {
      projectHTML += '<ul type="none" id="' + project._id + '">';
      projectHTML += '<li><h2 id="title">' + project.title + '</h2></li>';
      projectHTML += '<li><img id="image" src="' + project.image + '" height="300px"></li>';
      projectHTML += '</ul>';
      projectHTML += '<br>';
    });
    projectHTML += '</div>';
    $('.projectList').html(projectHTML);
  };
  $.getJSON(projectAPI, projectOptions, displayProjects);
});

$(document).ready(function() {
  // This is how you interact with a generated element
  $('.projectList').on('click', '.projectContainer ul' , function(event){
    // Assign a variable to "this" before using it in an ajax request
    var $this = $(this);
    var listId = $this.attr("id");

    var projectAPI = "/projects/" + listId;
    var projectOptions = {
      format: "json",
    };

    function displayProjects(data) {
      var projectHTML = '';
      $.each(data, function(i, project) {
        projectHTML += '<p id="summary">' + project.summary + '</p>';
        projectHTML += '<p id="technologies">' + project.technologies + '</p>';
        projectHTML += '<a href="' + project.url + '" id="url">' + project.url + '</a>';
        projectHTML += '<a href="' + project.github + '" id="github">' + project.github + '</a>';
        if(project.desktop === true) {
          projectHTML += '<h2 id="desktop">' + project.desktop + '</h2>';
        }
        if(project.mobile === true) {
          projectHTML += '<h2 id="mobile">' + project.mobile + '</h2>';
        }
      });
      $('.extraInfo').html(projectHTML);
    };
    $.getJSON(projectAPI, projectOptions, displayProjects);
  });
  $('.extraInfo').click(function(){
    $(this).html("");
  });
});

