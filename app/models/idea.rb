class Idea < ActiveRecord::Base
  has_many :idea_tags
  has_many :tags, through: :idea_tags
  default_scope { order('rating DESC')}
  enum rating: %w(swill plausable genius)
end
