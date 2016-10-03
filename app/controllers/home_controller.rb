class HomeController < ApplicationController
  before_action :allow_iframe_requests
  def allow_iframe_requests
    response.headers.delete('X-Frame-Options')
  end

  def index
    if params[:access_token].present?
      session[:access_token] = params[:access_token]
      session[:refresh_token] = params[:refresh_token]
      session[:expires_in] = params[:expires_in]
    end


    #sandbox URL.
    @authorize_link="http://sandbox.jurnal.id/authorize_apps/new"

    #this is the client_id of this sample app to the sandbox url
    @client_id =  "57170c81a5a74b7d83a469e41364b102"

  end

  def logout
    if params[:logout]
      reset_session
      redirect_to root_path
    end
  end
end