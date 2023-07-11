Rails.application.routes.draw do
  root 'layouts#index'
  get '/random_greeting', to: 'greetings#random_greeting'
  # Other routes for your application
end