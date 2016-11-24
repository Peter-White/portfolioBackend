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
      projectHTML += '<li><a id="url" href="' + project.url + '">' + project.url + '</a></li>';
      projectHTML += '</ul>';
      projectHTML += '<br>';
    });
    projectHTML += '</div>';
    $('body').append(projectHTML);
  };
  $.getJSON(projectAPI, projectOptions, displayProjects);
});

$(document).ready(function() {

  $(document).on('click', '.projectContainer ul' , function(event){
    var listId = $(this).attr("id");
    alert(listId);
  });
});
// projectHTML += '<li><p id="summary">' + project.summary + '</p></li>';
// projectHTML += '<li><p id="technologies">' + project.technologies + '</p></li>';
// projectHTML += '<li><a href="' + project.url + '" id="url">' + project.url + '</a></li>';
// projectHTML += '<li><a href="' + project.github + '" id="github">' + project.github + '</a></li>';
// projectHTML += '<li><h2 id="desktop">' + project.desktop + '</h2></li>';
// projectHTML += '<li><h2 id="mobile">' + project.mobile + '</h2></li>';
