class UserAssetsController < ApplicationController
  before_action :set_user_asset, only: [:show, :edit, :update, :destroy]

  # GET /user_assets
  # GET /user_assets.json
  def index
    @user_assets = UserAsset.all
  end

  # GET /user_assets/1
  # GET /user_assets/1.json
  def show
  end

  # GET /user_assets/new
  def new
    @user_asset = UserAsset.new
  end

  # GET /user_assets/1/edit
  def edit
  end

  # POST /user_assets
  # POST /user_assets.json
  def create
    @user_asset = UserAsset.new(user_asset_params)

    respond_to do |format|
      if @user_asset.save
        format.html { redirect_to @user_asset, notice: 'User asset was successfully created.' }
        format.json { render :show, status: :created, location: @user_asset }
      else
        format.html { render :new }
        format.json { render json: @user_asset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_assets/1
  # PATCH/PUT /user_assets/1.json
  def update
    respond_to do |format|
      if @user_asset.update(user_asset_params)
        format.html { redirect_to @user_asset, notice: 'User asset was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_asset }
      else
        format.html { render :edit }
        format.json { render json: @user_asset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_assets/1
  # DELETE /user_assets/1.json
  def destroy
    @user_asset.destroy
    respond_to do |format|
      format.html { redirect_to user_assets_url, notice: 'User asset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_asset
      @user_asset = UserAsset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_asset_params
      params.require(:user_asset).permit(:asset_name, :count, :status, :returned, :user_id)
    end
end
