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
  resources :users, only: [:create]
  
  # routes for todo
  get "/users/:user_id/todos", to: "todos#index"
  post "/users/:user_id/todos", to: "todos#create"
  put "/todos/:id", to: "todos#update"
  delete "/todos/:id", to: "todos#destroy"

  # routes for api 
  get "/apis", to: "apis#index"
  put "/apis/:id", to: "apis#update"

  


end
