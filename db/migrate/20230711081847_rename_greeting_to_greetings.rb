class RenameGreetingToGreetings < ActiveRecord::Migration[7.0]
  def change
    rename_table :Greeting, :greetings
  end
end
