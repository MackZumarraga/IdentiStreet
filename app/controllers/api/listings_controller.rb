class Api::ListingsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @listings = bounds ? Listing.in_bounds(bounds) : Listing.all

        # @listings = Listing.all
        render "api/listings/index"
    end
    
    def show
        @listing = Listing.find(params[:id])
    
        if @listing
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 404
        end
    end

    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @listing = Listing.find_by(id: params[:id])

        if @listing.update(listing_params)
            # debugger
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if !@listing.destroy
            render json: @listing.errors.full_messages, status: 404
        end
        @listing.destroy
        render "api/listings/show"
    end
    
    private

    def bounds
        params[:bounds]
    end

    def listing_params
        # debugger
        params.require(:listing).permit(
            :address,
            :area,
            :neighborhood,
            :latitude,
            :longitude,
            :category,
            :price,
            :bedrooms,
            :baths,
            :description,
            :square_feet,
            :dollars_per_sq_ft,
            :broker_fee,
            :outdoor_space,
            :dishwasher,
            :washer_dryer_in_unit,
            :washer_dryer_in_building,
            :guarantors_accepted,
            :furnished,
            :fireplace,
            :central_air,
            :city_view,
            :park_view,
            :skyline_view,
            :water_view,
            :elevator,
            :doorman,
            :gym,
            :garage_parking,
            :pets_allowed,
            :swimming_pool,
            :leasing_launch_date,
            :listing_agent,
            # :user_id,
            # :id,
            # :latitude,
            # :longitude,
            # :image_urls,
            photos: []
        )
    end
end
