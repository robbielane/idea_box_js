class Tag < ActiveRecord::Base
  has_many :idea_tags
  has_many :ideas,  through: :idea_tags
  validates :name, uniqueness: true

  def self.add_tags(tags, idea)
    tags = tags.split(',')
    tags.each do |tag|
      if !idea.tags.find_by(name: tag)
        idea.tags << Tag.find_or_create_by(name: tag.strip.downcase)
      end
    end
  end
end
