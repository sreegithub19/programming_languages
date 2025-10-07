Feature: JSON API testing
  As a tester
  I want to check API responses
  So that I know the API works correctly

  Scenario: Get a post by ID
    Given the API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    When I send a GET request
    Then the response status code should be 200
    And the response should contain "userId"
    And the field "id" should be 1

  Scenario: Get a post that does not exist
    Given the API endpoint "https://jsonplaceholder.typicode.com/posts/9999"
    When I send a GET request
    Then the response status code should be 404

  Scenario: Verify multiple fields in a post
    Given the API endpoint "https://jsonplaceholder.typicode.com/posts/2"
    When I send a GET request
    Then the response status code should be 200
    And the response should contain "userId"
    And the response should contain "title"
    And the field "id" should be 2
    And the field "userId" should be 1

  Scenario: Test list of posts
    Given the API endpoint "https://jsonplaceholder.typicode.com/posts"
    When I send a GET request
    Then the response status code should be 200
    And the response should contain "userId"
    And the response should contain "id"
    And the response should contain "title"
