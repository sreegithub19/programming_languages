import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Set up authentication
# Provide all the required credentials programmatically to avoid interactive input
# Client_id and secret from here: https://developer.spotify.com/dashboard/2e462572e9e74ae4bedf7fc0e6003cd9
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id="2e462572e9e74ae4bedf7fc0e6003cd9",
    client_secret="4ef05e4fb521487398d67da3c383086c"
))

# Playlist ID (extracted from the URL)
playlist_id = "5acxMRhPE5fqEEAtjTShrW"

# Get playlist details
playlist = sp.playlist(playlist_id)

# Print playlist details
print(f"Playlist Name: {playlist['name']}")
print(f"Description: {playlist['description']}")
print(f"Total Tracks: {playlist['tracks']['total']}")
print("Tracks:")

# Print the tracks in the playlist
for item in playlist['tracks']['items']:
    track = item['track']
    print(f" - {track['name']} by {', '.join(artist['name'] for artist in track['artists'])}")
    print(f"   Spotify Link: {track['external_urls']['spotify']}")