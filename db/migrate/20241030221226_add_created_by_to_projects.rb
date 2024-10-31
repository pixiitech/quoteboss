class AddCreatedByToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :created_by, :integer
  end
end
