class TodosController < ApplicationController
  respond_to :json

  def index
    respond_with Todo.all.select(:id, :title, :updated_at)
  end

  def create
    respond_with Todo.create(todo_params)
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end

  def update
    todo = Todo.find_by(id: params["id"])
    todo.update_attributes(todo_params)
    respond_with todo, json: todo
 end

 private

  def todo_params
    params.require(:todo).permit(:id, :title)
  end
end
