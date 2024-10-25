class SessionsController < Devise::SessionsController
  layout 'sign_in', only: :new

  def new
    super
  end
end
