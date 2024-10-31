class Project < ApplicationRecord
  acts_as_paranoid

  validates :title, presence: true

  enum status: {
    active_quote: 0,
    archived_quote: 10,
    quote_accepted: 20,
    work_started: 30,
    work_completed: 40
  }

  enum project_type: {
    single_family_home: 0,
    multi_family_home: 1,
    condominium: 2,
    commercial: 3
  }
end
