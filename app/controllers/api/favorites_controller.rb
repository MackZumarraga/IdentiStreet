class Api::FavoritesController < ApplicationController
    def create
    #   @listing = Listing.find(params[:id])
      
    #   params[:favorite][:user_id] = current_user.id
      
    #   Favorite.create(user_id: current_user.id, listing_id: @listing.id)

      @favorite = Favorite.new(favorite_params)
      debugger
      if !@favorite.save
        render json: @favorite.errors.full_messages, status: 422
      else
        render json: ["Successful favoriting"], status: 200
      end

    #   @favorite.save
    end


    def destroy
      @favorite = Favorite.find(params[:id])

      if @favorite
        @favorite.destroy
      else
        render json: @favorite.errors.full_messages, status: 422
      end

    end

    private
    
    def favorite_params
        params.require(:favorite).permit(:user_id, :listing_id)
    end
  
end