Rails.application.routes.draw do
  resources :answers
  resources :questions
  
  # You can have the root of your site routed with "root"
  root 'questions#index'
end
