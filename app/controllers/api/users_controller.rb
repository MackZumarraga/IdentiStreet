class Api::UsersController < ApplicationController
    def create
      @user = User.new(user_params)
  
      if @user.save
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    def destroy
      @user = User.find(params[:id])
      if !@user.destroy
        render json: @user.errors.full_messages, status: 404
      @user.destroy
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:email, :password, :phone_number, :name)
    end
  end