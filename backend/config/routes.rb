Rails.application.routes.draw do
  resources :user_assets
  resources :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :company_assets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
