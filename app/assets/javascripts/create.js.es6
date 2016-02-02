var createIdea = () => {
  $('.new-idea').on('click', (e) => {
    e.preventDefault();
    var idea = $('#new-idea-form').serialize()
    addIdea(idea);
  })
}

var addIdea = (idea) => {
  $.ajax({
    type: 'POST',
    url: 'api/v1/ideas',
    data: idea,
    success: (idea) => {
      $("input[type=text], textarea").val('')
      renderIdea(idea);
    }
  })
}
