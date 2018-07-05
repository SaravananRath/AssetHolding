class EmployeeController < ApplicationController
  before_action :authenticate_request!

  def index
    render json: {"employee_logged_in" => true}
  end

end
