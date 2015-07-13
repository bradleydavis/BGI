class PeopleController < ApplicationController

	def show
		person = Refinery::Page.find(params[:id])

    response = { title: person.title, 
    						 subtitle: person.content_for(:subtitle).html_safe, 
    						 body: person.content_for(:body).html_safe, 
    						 contact: person.content_for(:contact).html_safe,
    						 avtar: image_for(person.content_for(:image))
    						}

    respond_to do |format|
      format.html
      format.json { render json: response }
    end		
	end

end
