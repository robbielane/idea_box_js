Rails.application.routes.draw do
  root to: 'idea_box#index'

  namespace :api do
    namespace :v1 do
      resources :ideas,
                only: [:index, :create, :edit, :destroy],
                defaults: { format: :json}
    end
  end
end
