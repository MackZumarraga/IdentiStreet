class Api::FavoritesController < ApplicationController
    def create
    #   debugger
      @listing = Listing.find(params[:favorite][:listing_id])
    #   @listing.favorited?(params[:user_id])
      
    #   params[:favorite][:user_id] = current_user.id
      
    #   Favorite.create(user_id: current_user.id, listing_id: @listing.id)

      @favorite = Favorite.new(favorite_params)
    #   debugger
      if !@favorite.save
        render json: @favorite.errors.full_messages, status: 422
      else
        render "api/favorites/favorite"
        # debugger
        # render "/app/views/api/listings/show.json"
        # render "show.json"
        # render json: ["Success"], status: 200
      end

    #   @favorite.save
    end


    def destroy
      @listing = Listing.find(params[:favorite][:listing_id])
    #   debugger
      @favorite = Favorite.where(user_id: params[:favorite][:user_id], listing_id: params[:favorite][:listing_id])

      if @favorite
        # debugger
        # @favorite.destroy
        Favorite.destroy(@favorite[0].id)
        # debugger
        render "api/favorites/favorite"
        # render "app/views/api/listings/show"
        # debugger
        # render "show.json"
        # render json: ["Success"], status: 200
      else
        render json: @favorite.errors.full_messages, status: 422
      end

    end

    private
    
    def favorite_params
        params.require(:favorite).permit(:user_id, :listing_id)
    end
  
end