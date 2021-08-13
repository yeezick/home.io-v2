class CreateSettings < ActiveRecord::Migration[6.1]
  def change
    create_table :settings do |t|
      t.string :background_color
      t.string :landing_image
      t.string :text_font
      t.string :header_font
      t.boolean :default
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
