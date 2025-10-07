import requests
from behave import given, when, then

@given('the API endpoint "{url}"')
def step_given_api_endpoint(context, url):
    context.url = url

@when("I send a GET request")
def step_when_get_request(context):
    context.response = requests.get(context.url)

@then("the response status code should be {status_code:d}")
def step_then_status_code(context, status_code):
    assert context.response.status_code == status_code, f"Expected {status_code}, got {context.response.status_code}"

@then('the response should contain "{field}"')
def step_then_response_contains(context, field):
    json_data = context.response.json()
    if isinstance(json_data, list):
        assert all(field in item for item in json_data), f"Field '{field}' missing in one or more items"
    else:
        assert field in json_data, f"Expected field '{field}' in response"

@then('the field "{field}" should be {value:d}')
def step_then_field_value(context, field, value):
    json_data = context.response.json()
    assert json_data.get(field) == value, f"Expected {field}={value}, got {json_data.get(field)}"
