class CreateApis < ActiveRecord::Migration[6.1]
  def change
    create_table :apis do |t|
      t.boolean :news
      t.boolean :weather
      t.boolean :joke
      t.boolean :quote
      t.boolean :cat
      t.boolean :fact
      t.boolean :crypto
      t.boolean :food
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
