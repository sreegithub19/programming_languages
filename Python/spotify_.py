import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Set up authentication
# Provide all the required credentials programmatically to avoid interactive input
# Client_id and secret from here: https://developer.spotify.com/dashboard/2e462572e9e74ae4bedf7fc0e6003cd9
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id="2e462572e9e74ae4bedf7fc0e6003cd9",
    client_secret="603eb483bf4e43e29a4181f8cd9cd0fa"
))
# Get the 
# current user's playlists
playlists = sp.current_user_playlists()

# Print playlist names and their contents
for playlist in playlists['items']:
    print(f"Playlist: {playlist['name']}")
    playlist_id = playlist['id']
    results = sp.playlist_items(playlist_id)
    for item in results['items']:
        track = item['track']
        print(f" - {track['name']} by {track['artists'][0]['name']}")

# # Now you can access the refresh token from the auth_manager
# auth_manager = sp.auth_manager
# token_info = auth_manager.get_cached_token()
# #if token_info:
# print("Access Token:", token_info['access_token'])
# print("Refresh Token:", token_info['refresh_token'])
# # else:
# #     print("No token info found. Ensure you authorize the app.")