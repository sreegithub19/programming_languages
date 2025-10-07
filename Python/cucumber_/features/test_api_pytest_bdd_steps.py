import requests
import pytest
from pytest_bdd import scenarios, given, when, then, parsers

# Link the feature file
scenarios('./api.feature')


# Context-like fixture
@pytest.fixture
def context():
    return {}


@given(parsers.parse('the API endpoint "{url}"'))
def given_api_endpoint(context, url):
    context['url'] = url


@when("I send a GET request")
def when_send_get_request(context):
    context['response'] = requests.get(context['url'])


@then(parsers.parse("the response status code should be {status_code:d}"))
def then_status_code(context, status_code):
    response = context['response']
    assert response.status_code == status_code, f"Expected {status_code}, got {response.status_code}"


@then(parsers.parse('the response should contain "{field}"'))
def then_response_contains(context, field):
    json_data = context['response'].json()
    if isinstance(json_data, list):
        assert all(field in item for item in json_data), f"Field '{field}' missing in one or more items"
    else:
        assert field in json_data, f"Expected field '{field}' in response"


@then(parsers.parse('the field "{field}" should be {value:d}'))
def then_field_value(context, field, value):
    json_data = context['response'].json()
    assert json_data.get(field) == value, f"Expected {field}={value}, got {json_data.get(field)}"
