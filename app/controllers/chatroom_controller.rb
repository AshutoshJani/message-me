class ChatroomController < ApplicationController
    before_action :require_user

    def index
        @message = Message.create
        @messages = Message.all
    end

end