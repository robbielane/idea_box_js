class Api::V1::TagsControllerTest < ActionController::TestCase

  def json_response
    JSON.parse(response.body)
  end

  test "#index" do
    tag_count = Tag.count
    get :index, format: :json

    assert_response :success
    assert_equal tag_count, json_response['tags'].count
  end

end
