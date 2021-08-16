class RenameFactToCosmic < ActiveRecord::Migration[6.1]
  def change
    rename_column :apis, :fact, :cosmic
  end
end
