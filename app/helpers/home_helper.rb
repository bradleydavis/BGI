module HomeHelper

	def image_for content
		content.split.each do |attribute|
			return attribute.split("=")[1].gsub('"', '') if attribute.include? "src"
		end
		return "team/3.jpg"
	end

end
