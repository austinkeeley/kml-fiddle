#
# fiddle.rb
# A fiddle object is just a KML document that we're storing and we can retrive later
#
class Fiddle < ActiveRecord::Base
  attr_accessible :title, :content
end
