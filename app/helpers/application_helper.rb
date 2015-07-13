module ApplicationHelper

	def get_person
		session[:page_id] ? Refinery::Page.find(session[:page_id]) : nil
	end

end
