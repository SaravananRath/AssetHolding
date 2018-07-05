Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  post 'auth_user' => 'authentication#authenticate_user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :hr do
    get 'home' => 'hr#index'
  end

  scope :employee do
    get 'home' => 'employee#index'
  end

  resources :user_assets
  resources :users
  resources :company_assets
end
