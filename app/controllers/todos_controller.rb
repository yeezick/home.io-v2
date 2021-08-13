class TodosController < ApplicationController
  before_action :get_todo, only: [:show, :update, :destroy]

  def index 
    todos = Todo.where(user_id: params[:user_id]) #find only todos associated with that user
    render json: todos
  end
  
  def show 
    render json: @todo, include: :user_id
  end

    # POST /todos
  def create 
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo, status: :created 
    else 
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def update 
    if @todo.update(todo_params)
      render json: @todo, status: :ok
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @todo.destroy
    render json: "DELETED"
  end

  private 
  # :todo requires strong params
  def todo_params
    params.require(:todo).permit(:input, :user_id)
  end

  def get_todo
    @todo = Todo.find(params[:id])
  end

end
