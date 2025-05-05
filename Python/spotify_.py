import spotipy
from spotipy.oauth2 import SpotifyOAuth

# Set up authentication
# to get id and secret, and redirect URL: https://developer.spotify.com/dashboard/2e462572e9e74ae4bedf7fc0e6003cd9
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
    client_id="2e462572e9e74ae4bedf7fc0e6003cd9",
    client_secret="603eb483bf4e43e29a4181f8cd9cd0fa",
    redirect_uri="https://developer.spotify.com/",
    scope="playlist-read-private"
))

# Get the current user's playlists
playlists = sp.current_user_playlists()

# Print playlist names and their contents
for playlist in playlists['items']:
    print(f"Playlist: {playlist['name']}")
    playlist_id = playlist['id']
    results = sp.playlist_items(playlist_id)
    for item in results['items']:
        track = item['track']
        print(f" - {track['name']} by {track['artists'][0]['name']}")