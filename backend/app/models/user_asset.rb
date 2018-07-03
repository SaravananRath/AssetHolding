class UserAsset < ApplicationRecord
  belongs_to :user
  after_create :update_count

  def update_count
    # user.update_attribute(:name, "Rob")
    company_asset = CompanyAsset.find_by(:name=>self.asset_name)
    ori_count = company_asset.count
    req_count = self.count
    update_count = ori_count - req_count
    if update_count < 0
      puts 'not possible'
      else
        company_asset.update_attributes(:count=>update_count)
    end
  end
end
