A simple webapp to display messages read from MQTT topics - originally forked from @seandmccarthy's [project](http://github.com/seandmccarthy/mqtt_message_server)

Uses Sinatra, with the [mqtt gem](https://github.com/njh/ruby-mqtt) from @njh 

The Sinatra app subscribes to topics on an MQTT broker and presents them as Server Sent Events on a URL. The client-side Javascript code then updates the web UI with the values received.
