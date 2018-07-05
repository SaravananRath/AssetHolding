class HrController < ApplicationController
  before_action :authenticate_request!

  def index
    render json: {"hr_logged_in" => true}
  end

end
