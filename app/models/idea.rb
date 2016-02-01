class Idea < ActiveRecord::Base
  enum rating: %w(swill plausable genius)
end
