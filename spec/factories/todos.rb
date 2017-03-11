FactoryGirl.define do
  factory :todo do
    sequence(:title) { |n| "Title #{n}" }
  end
end
