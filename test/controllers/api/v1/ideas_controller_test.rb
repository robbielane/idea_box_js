require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  def json_response
    JSON.parse(response.body)
  end

  test '#index' do
    idea_count = Idea.count
    get :index, format: :json

    assert_response :success
    assert_equal idea_count, json_response['ideas'].count
  end

  test '#index returns an Array of Ideas' do
    get :index, format: :json

    assert_kind_of Array, json_response['ideas']
  end

  test '#show' do
    idea = Idea.create!(title: 'Idea Title', body: 'Idea Body')
    get :show, id: idea.id, format: :json

    assert_equal 'Idea Title', json_response['idea']['title']
    assert_equal 'Idea Body', json_response['idea']['body']
    assert_equal 'swill', json_response['idea']['rating']
  end

end
