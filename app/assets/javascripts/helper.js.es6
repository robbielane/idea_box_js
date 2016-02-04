jQuery.fn.reverse = [].reverse;

String.prototype.trunc = function( n, useWordBoundary ){
  var isTooLong = this.length > n
  var s_ = isTooLong ? this.substr(0, n-1) : this;
  s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
  return isTooLong ? s_ + `...<br><a href='#' class='more'>Show More</a>` : s_;
};
