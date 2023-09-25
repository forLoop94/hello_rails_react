class MessagesController < ApplicationController
  def index
    @random_message = Message.order('RANDOM()').first
  end
end
