from typing import Optional
from pydantic import BaseModel

# create a pydantic data model
class Profile(BaseModel):
    firstname: str
    lastname: str
    location: Optional[str] = None
    bio: Optional[str] = None

# create a new profile with some fields
new_profile = {
    "firstname": "Tomi",
    "lastname": "Bamimore",
}

# validate the new_profile with the Profile data model
profile = Profile(**new_profile)
print(profile.model_dump_json())