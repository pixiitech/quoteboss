class ApplicationController < ActionController::Base
  include ActionController::Cookies

  before_action :authenticate_user!
  after_action :set_csrf_cookie

  def fallback_index_html
    render file: 'public/index.html'
  end

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = {
      value: form_authenticity_token,
      secure: true,
      same_site: :strict,
      domain: ENV.fetch('DOMAIN_HOST', 'localhost')
    }
  end
end
