class PeopleController < ApplicationController

	def show
	person = Refinery::Page.find(params[:id])

    images = person.content_for(:images).nil? ? "" : person.content_for(:images).html_safe

    p "---"
    p images

    response = { title: person.title, 
    						 subtitle: person.content_for(:subtitle).html_safe, 
    						 body: person.content_for(:body).html_safe, 
    						 contact: person.content_for(:contact).html_safe,
    						 avtar: image_for(person.content_for(:image)),
                             images: images
    						}

    respond_to do |format|
      format.html
      format.json { render json: response }
    end		
	end

end
