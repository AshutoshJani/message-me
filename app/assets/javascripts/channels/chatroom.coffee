App.chatroom = App.cable.subscriptions.create "ChatroomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    $('#message-container').append data.msg #JS Coffee code for appeding to an id class
    # $('#message-container').append(data.msg) #JS code code to append

    scroll_bottom() # Scroll to the bottom after every message sent
