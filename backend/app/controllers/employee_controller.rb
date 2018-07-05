class EmployeeController < ApplicationController
  before_action :authenticate_request!

  def dashboard
    assets = GenericService.new({:user=> current_user}).user_assets
    render json: {"assets" => assets}
  end

end
