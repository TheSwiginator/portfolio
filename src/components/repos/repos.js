import { useState } from 'react';

class GithubAPI {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    async generateToken() {
        const token = await fetch('https://api.github.com/users/theswiginator').then(response => response.json());
        console.log(token);
    }
}

export default function Repos(props) {
    const [instance, setInstance] = useState(new GithubAPI('Iv1.961f02437fd93e69', '20252a1526b306e004aeb936c67615a94f81a840'));

    <div className="w-full h-[400px] flex justify-center relative">
        <div className="w-1/2 h-full"></div>
    </div>
};