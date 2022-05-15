import { useState } from 'react';

class GithubAPI {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }


}

export default function Repos(props) {
    const [instance, setInstance] = useState(new GithubAPI('', ''));

    <div className="w-full h-[400px] flex justify-center relative">
        <div className="w-1/2 h-full"></div>
    </div>
};