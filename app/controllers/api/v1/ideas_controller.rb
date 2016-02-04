class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    idea = Idea.create(title: params[:title], body: params[:body])
    Tag.add_tags(params[:tags], idea) if params[:tags]
    respond_with :api, :v1, idea
  end

  def update
    idea = Idea.find(params[:id])
    Tag.add_tags(params[:tags], idea) if params[:tags]
    idea.update_attributes(idea_params)
    respond_with idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:id, :title, :body, :rating)
  end
end
