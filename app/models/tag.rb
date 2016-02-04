class Tag < ActiveRecord::Base
  has_many :idea_tags
  has_many :ideas,  through: :idea_tags

  def self.add_tags(tags, idea)
    tags = tags.split(',')
    tags.each { |tag| idea.tags.find_or_create_by(name: tag.strip.downcase) }
  end
end
