require 'rails_helper'

RSpec.describe Todo, type: :model do
  it "has a valid factory" do
    expect(create(:todo)).to be_valid
  end

  it "returns correct title" do
    todo = create(:todo, title: 'My title')
    expect(todo.title).to eq('My title')
  end

  it "returns correct todo count" do
    todo1 = create(:todo)
    todo2 = create(:todo)
    expect(Todo.all.count).to eq(2)
  end

end
