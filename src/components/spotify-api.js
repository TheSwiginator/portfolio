export default class SpotifyAPI {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.createdDate = null;
        this.expiredDate = null;
        this.accessToken = null;
    }

    async getToken() {
        if (!this.accessToken) {
            // Create a token if there is no existing token generated
            return await this.generateToken();
        } else {
            // Check to see if the token has expired, if not it will generate a new token
            if   (this.expiredDate.getTime() - (new Date()).getTime() > 0) {
                return this.accessToken
            } else {
                return await this.generateToken();
            }
        }
    }

    // error handler
    ಠ_ಠ(error) {
        console.log(error);
    }

    async generateToken() {
        /* Specify HTTP request information */
        const authOptions = {
            method: "POST",
            // The client id and client secret must be converted to base64 before being added to the header for security purposes
            headers: {"Authorization": `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`, 'Content-type': 'application/x-www-form-urlencoded'},
            // The information being requested is only from my own Spotify account, that is why we are requesting "client_credentials"
            body: 'grant_type=client_credentials',
            grant_type: "client_credentials"
        }

        /* Perform the token request */
        const token = await fetch('https://accounts.spotify.com/api/token', authOptions) // Make a POST request to Spotify
        .then(response => response.json()) // Wait for the raw data to be converted to json data
        .catch(error => {SpotifyAPI.ಠ_ಠ(error.status)});

        /* Parsing token data */
        this.createdDate = new Date(); // Record when token was created
        this.expiredDate = new Date(this.createdDate.getTime() + 1000 * token.expires_in); // Calculate and record when token will expire
        this.accessToken = token.access_token; // Record access token string
        
        return this.accessToken
    }

    // Below are methods for API Endpoints
    
    async getArtist(id) {
        const authOptions = {
            method: "GET",
            headers: {'Authorization': `Bearer ${await this.getToken()}`, 'Content-Type': 'application/json'}
        }

        const artist = await fetch(`https://api.spotify.com/v1/artists/${id}`, authOptions)
        .then(response => response.json())
        .catch(error => {SpotifyAPI.ಠ_ಠ(error.status)});

        return artist;
    }

    async getPlaylist(id) {
        const authOptions = {
            method: "GET",
            headers: {'Authorization': `Bearer ${await this.getToken()}`, 'Content-Type': 'application/json'}
        };

        const playlist = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, authOptions)
        .then(response => response.json())
        .catch(error => {SpotifyAPI.ಠ_ಠ(error.status)});

        return playlist;
    }

    async getPlaylistInfo(id) {
        const authOptions = {
            method: "GET",
            headers: {'Authorization': `Bearer ${await this.getToken()}`, 'Content-Type': 'application/json'}
        };

        const playlist = await fetch(`https://api.spotify.com/v1/playlists/${id}`, authOptions)
        .then(response => response.json())
        .catch(error => {SpotifyAPI.ಠ_ಠ(error.status)});

        return playlist;
    }
}