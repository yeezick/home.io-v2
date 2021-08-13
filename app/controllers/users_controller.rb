# todo list
# GET /users/:id should not return password_digest
# PUT /users/:id error: "Not enough or too many segments"

class UsersController < ApplicationController
  before_action :get_user, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:verify, :update, :destroy, :add_tasks_to_todos]

  # GET /users
  def index 
    users = User.all
    render json: users
  end

  # GET /users/:id
  def show 
    render json: @user, include: [:apis, :todos]
  end

  # POST /users, example: 
#   { 
#     "user":
#     {
#     "name": "dummy",
#     "email": "dum@me.com",
#     "username" : "pirate123",
#     "password": "erickyeah"
#     }
# }
  def create 
    user = User.new(user_register_params)
    if user.save
      token = create_token(user.id)
      # create todos table
      Todo.create!([{input: "Click me to delete", user: user}, {input:"Click the pencil to edit this task", user: user}])

      # create api list
      Api.create!(news: false, weather: false, joke: false, quote: false, cat: false, fact: false, crypto: false, food:false, user: user)

      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else 
      render json: user.errors, status: 422
    end
  end

  def update 
    if @user.update(user_register_params)
      render json: @user, status: :ok
    else 
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    if @user.destroy
      render json: "DELETED", status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # CUSTOM METHODS
  
    # method for adding todos
    def add_task_to_todo 
      # task = Todo.find_by(input: todo_params[:input])
      if !@user.todos.include task
        @user.todos.push(task)
        render json: @user, include: :todos
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end

  # Authentication 

  # POST /users/login
  def login 
    user = User.find_by(email: user_login_params[:email])

    if user && user.authenticate(user_login_params[:password])
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else 
      render json: {error: "unauthorized"}, status: :unauthorized
    end
  end

  # GET /users/verify
  def verify 
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  private
  
  # set user
  def get_user
    @user = User.find(params[:id])
  end

  # retrieve params 
  def todo_params
    params.require(:todo).permit(:input)
  end

  def user_register_params
    params.require(:user).permit(:username, :email, :name, :password)
  end

  def user_login_params
    params.require(:user).permit(:email, :password)
  end
  
  def create_token(id) 
    payload = {id: id, exp: 24.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

end
