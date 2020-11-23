import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import EmbedIndex from "../routes/embedIndex";
import EmbedPlayer from "../routes/embedPlayer";
import Login from "../routes/login";
import LoginCallback from "../routes/loginCallback";
import NotFoundPage from "../routes/notfound";

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Router onChange={handleRoute}>
                <Route path="/embed/:embedId" component={EmbedIndex} />
                <Route path="/login/:embedId/" component={Login}/>
                <Route path="/login/:embedId/callback" component={LoginCallback} />
                <Route path="/embed/:embedId/player" component={EmbedPlayer} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
