Rails.application.routes.draw do
  root to: 'home#index'
  
  resources :cors
  match '/', :to => proc {|env| [200, {'Content-Type' => 'text/plain'}, ["Hello world"]] },
             :via => [:get, :post, :put, :delete, :options, :head, :patch]

  get '/logout', to: 'home#logout'

end
