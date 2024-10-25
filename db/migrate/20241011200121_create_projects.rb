class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.text :address
      t.string :number
      t.integer :status, null: false, default: 0
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
