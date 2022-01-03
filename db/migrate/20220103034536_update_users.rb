class UpdateUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :name, true
    change_column_null :users, :phone_number, true
  end
end
