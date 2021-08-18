class MessagesController < ApplicationController
    before_action :require_user

    def create
        message = current_user.messages.build(message_params)
        if message.save
            ActionCable.server.broadcast "chatroom_channel", msg: message_render(message) # Calling the messages/message.html.erb partial for proper rendering of the message
        end
    end

    private

    def message_params
        params.require(:message).permit(:body)
    end

    def message_render(message_to_be_rendered)
        render(partial: 'message', locals: {message: message_to_be_rendered}) # This command renders the message partial and the locals sends a hash containing the data rquired by the partial
    end

end