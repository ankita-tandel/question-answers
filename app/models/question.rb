class Question < ActiveRecord::Base
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers, :reject_if => lambda { |a| a[:description].blank? }, :allow_destroy => true

  validates :title, :description, presence: :true
end
