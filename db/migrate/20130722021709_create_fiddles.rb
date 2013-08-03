class CreateFiddles < ActiveRecord::Migration
  def change
    create_table :fiddles do |t|
      t.string :name
      t.string :content
      t.timestamps
    end
  end
end
