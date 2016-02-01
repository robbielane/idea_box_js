class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def update
    idea = Idea.find(params[:id])
    idea.update_attributes(idea_params)
    respond_with idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:title, :body, :rating)
  end

end
