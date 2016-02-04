var fetchTags = () => {
  $.getJSON('/api/v1/tags').then(response => response.tags.map( (tag) => { return renderTag(tag.name) } ))
                           .then(prependTags)
}

var prependTags = (tags) => {
  $('#tags').prepend(tags)
}

var renderTag = (tag) => {
    return `<span class='label label-warning'>${tag}</span>`
}
