class User < ApplicationRecord
  #### password may or may not be a problem down the line because column is called "password_digest" in user model
  has_secure_password

  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :username, :name, :email, :password_digest, presence: true
  validates :password_digest, length: {minimum: 4}

  has_many :apis, dependent: :destroy 
  has_many :todos, dependent: :destroy 
  # has_one :settings, dependent: :destroy 
  
end
