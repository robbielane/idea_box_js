class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :created_at, :updated_at, :tags

  def tags
    object.tags
  end
end
