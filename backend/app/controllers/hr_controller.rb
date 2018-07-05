class HrController < ApplicationController
  before_action :authenticate_request!

  def dashboard
    company_assets = GenericService.new({}).get_company_assets
    render json: {"assets" => company_assets}
  end

end
