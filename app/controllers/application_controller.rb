class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :set_classes, only: :index

  def set_classes
    if params[:person_id]
    	@person = Refinery::Page.find(params[:person_id])
    	@body = "body bodyFixed"
    else
    	@body = "body"
  	end  	
  end

  def image_for content
    content.split.each do |attribute|
      return attribute.split("=")[1].gsub('"', '') if attribute.include? "src"
    end
    return "assets/team/3.jpg"
  end

end
