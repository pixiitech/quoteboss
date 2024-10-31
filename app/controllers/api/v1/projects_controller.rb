class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: %i[show destroy update]

  def index
    projects = Project.all.order(created_at: :desc).where(created_by: current_user.id)
    render json: projects.map { |p| ActiveModelSerializers::SerializableResource.new(p).as_json }
  end

  def create
    project = Project.create!(project_params.merge(created_by: current_user.id))
    render json: project ? project : project.errors
  end

  def update
    if (@project.update(project_params))
      render json: @project
    else
      render json: @project.errors
    end
  end
  
  def show
    render json: @project
  end

  def destroy
    @project.destroy
    render json: { message: 'project deleted!' }
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :address, :project_type)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
