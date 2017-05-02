

if ENV["SITE"] == "DEV"
  require "config_dev"
else
  require "config_prod"
end