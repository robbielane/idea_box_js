var fetchTags = () => {
  $.getJSON('/api/v1/tags').then(response => response.tags.map( (tag) => { return renderTag(tag.name) } ))
                           .then(appendTags)
}

var appendTags = (tags) => {
  $('#tags').append(tags)
}

var renderTag = (tag) => {
    return `<a href='#' class='tag'><span class='label label-warning'>${tag}</span></a>`
}


var tagButtons = () => {
  $('.container').delegate('.tag', 'click', function(e) {
    e.preventDefault();
    var tag = $(this)[0].innerText
    filterIdeasByTag(tag);
  })
}

var filterIdeasByTag = (tag) => {
  var ideas = $('.idea')
  ideas.hide()
  var filtered = ideas.filter( function() {
    var tags = $(this).find('.label').map(function(index, tag) { return tag.innerText })
    tags = Array.prototype.slice.call(tags)
    return tags.indexOf(tag) > -1
  })
  filtered.show();
  $('#clear-filters').removeClass('hidden')
}

var clearFiltersButton = () => {
  $('#clear-filters').on('click', () => {
    $('#clear-filters').addClass('hidden')
    $('.idea').show()
  })
}
