require 'sinatra'
require 'mqtt'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  erb :index
end

get '/readings' do
  headers 'Content-Type' => 'text/event-stream'
  headers 'Cache-Control'=> 'no-cache'
  headers 'Connection' => 'keep-alive'
  stream do |out|
    MQTT::Client.connect('m2m.eclipse.org') do |c|
      c.get('PowerMeter/#') do |topic, message|
        name = topic.split("/")[1]
        out << "event: #{name}\n"
        out << "data: #{message}\n\n"
      end
    end
  end
end
