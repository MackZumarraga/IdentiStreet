class AddIndextoUserId < ActiveRecord::Migration[6.1]
  def change
    add_index :listings, :user_id
  end
end
