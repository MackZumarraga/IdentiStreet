class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
    
    add_index :favorites, :user_id
    add_index :favorites, :listing_id
    add_index :favorites, [:listing_id, :user_id], unique: true
  end
end

