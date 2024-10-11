class CreateQuotes < ActiveRecord::Migration[7.1]
  def change
    create_table :quotes do |t|
      t.string :title, null: false
      t.text :description
      t.text :address
      t.string :number
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
