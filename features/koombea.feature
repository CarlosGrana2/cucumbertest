Feature: testing Koombea

Scenario: search en Google

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists
  And click on the menu image
  And validate that the search bar exists
  And perform search


  Scenario: Descargando Imagen

  Given select image to download
  And downloading the image