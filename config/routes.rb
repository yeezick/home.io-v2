Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # generic
  # resources :users do 
  #   resources :todos, :apis
  # end

  # put "/foods/:food_id/add_flavor", to: "foods#add_flavor_to_food"
  # resources :foods
  # resources :flavors, only: [:index]
  
  # routes to login & verify (creates a user || generates a JWT for an existing one)

  # authentication for user
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"
  put "/users/:id", to: "users#update"
  
  resources :users, only: [:create, :show]
  


end
