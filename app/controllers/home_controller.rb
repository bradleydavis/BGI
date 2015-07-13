class HomeController < ApplicationController

	def index
		people = Refinery::Page.find_by_link_url('/people')
    @people = people.nil? ? [] : people.children
    if params[:person_id]
    	@person = Refinery::Page.find(params[:person_id])
    	@body = "body bodyFixed"
    else
    	@body = "body"
  	end 
	end

  def set_person  	
  	session[:page_id] = params[:page_id]

  	# person = Refinery::Page.find(params[:page_id]) 
  	
  	# if person
	  # 	session[:person_name] = person.title
	  # 	session[:subtitle] = "Avenger"
	  # 	session[:description] = "Iron man is Tony Stark"
	  # 	session[:contact] = "tony@stark.com"
	  # end

  	render :nothing => true
  end

end
