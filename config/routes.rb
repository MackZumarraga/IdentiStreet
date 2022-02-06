Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resource :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
