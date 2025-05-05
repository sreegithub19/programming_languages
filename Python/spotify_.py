import spotipy
from spotipy.oauth2 import SpotifyOAuth

# Set up authentication
# Provide all the required credentials programmatically to avoid interactive input
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
    client_id="2e462572e9e74ae4bedf7fc0e6003cd9",
    client_secret="603eb483bf4e43e29a4181f8cd9cd0fa",
    redirect_uri="http://localhost:8888/callback",  # Use a localhost callback URI suitable for automation
    scope="playlist-read-private",
    open_browser=False  # Disables the automatic opening of a browser window
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