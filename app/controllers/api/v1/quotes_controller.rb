class Api::V1::QuotesController < ApplicationController
  before_action :set_quote, only: %i[show destroy]

  def index
    quote = Quote.all.order(created_at: :desc)
    render json: quote
  end

  def create
    quote = Quote.create!(quote_params)
    render json: quote ? quote : quote.errors
  end

  def show
    render json: @quote
  end

  def destroy
    @quote.destroy
    render json: { message: 'Quote deleted!' }
  end

  private

  def quote_params
    params.permit(:title, :description, :address)
  end

  def set_quote
    @quote = Quote.find(params[:id])
  end
end
