class Idea < ActiveRecord::Base
  default_scope { order('rating DESC')}
  enum rating: %w(swill plausable genius)
end
