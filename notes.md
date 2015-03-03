# Steps for Angular App

- Start your rails app
  - .rvmrc/.ruby-version
  - Fix your DB
- Download angular (or use a gem? sure)
  - Put it in vendor/assets/javascripts
- Download underscore - production limk
  - Put it in vendor/assets/javascripts
- Remove turbolinks
  - Remove it from application.html (on javascript tag, and stylesheet tag)
  - application.js (remove the require)
  - remove from Gemfile
  - Or, when creating a rails app rails new . --skip-tubolinks
- in routes uncomment welcome#index
- rails g contoller welcome index
- in app.js
  = require angular.min
  = require underscore.min
  = require welcome 
- devdocs.js is a great resource for js errors
- be sure to include in vender underscore-min.map and angular.min.js.map
- in angular you stay in the javascripts folder => controller.js and welcome.js and in the views => layouts and welcome index
- make controller.js and welcome.js files in js folder
- in layouts be sure to include 
  <%= stylesheet_link_tag    'application', media: 'all' %>
  <%= javascript_include_tag 'application' %>
  in the head tag
- to link angular to frontend include => in head tag
  ng-app="calculator"
-