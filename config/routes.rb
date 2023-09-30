Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  get '/random_message', to: 'messages#index'
  resources :messages, only: [:index]
end
