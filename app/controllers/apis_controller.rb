class ApisController < ApplicationController
  before_action :get_api, only: [:update]

  def index
    api = Api.all
    # (user_id: params[:user_id])
    render json: api
  end

  def update
    if @api.update(api_params)
      render json: @api, status: :ok
    else
    render json: api.errors, status: :unprocessable_entity
    end
  end
  # to test in postman ^
#   {
#     "user_id": 4,
#     "news": true,
#     "weather" : true
# }

  private
  def api_params
    params.require(:api).permit(:news, :weather, :joke, :quote, :cat, :cosmic, :crypto, :food,:user_id)
  end

  def get_api
    @api = Api.find(params[:id])
  end
end
