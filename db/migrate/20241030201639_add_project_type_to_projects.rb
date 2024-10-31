class AddProjectTypeToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :project_type, :integer
  end
end
