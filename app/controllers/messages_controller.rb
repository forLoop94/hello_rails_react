class MessagesController < ApplicationController
  def index
    @random_message = Message.order('RANDOM()').first
    render json: { message: @random_message&.content }
  end
end
