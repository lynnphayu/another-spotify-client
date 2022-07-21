import React, { Suspense, useEffect } from "react";
import "./App.scss";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ArtistDetail from "./pages/artistDetail";

const Login = React.lazy(() => import("./components/login"));
const Password = React.lazy(() => import("./components/password"));
const Landing = React.lazy(() => import("./pages/landing"));
const PersonalAudioFeatures = React.lazy(
  () => import("./pages/personalAudioFeatures")
);
const Favourites = React.lazy(() => import("./pages/favourites"));
const SearchPanel = React.lazy(() => import("./components/searchPanel"));
const Genres = React.lazy(() => import("./components/genres"));
const TrackDetail = React.lazy(() => import("./pages/trackDetail"));
const PlaylistDetail = React.lazy(() => import("./pages/playlistDetail"));
const Playlists = React.lazy(() => import("./pages/playlists"));

function App() {
  const location = useLocation();
  const history = useNavigate();
  useEffect(() => console.log("RE PAR"), []);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <div className="relative md:px-auto h-screen w-screen justify-center flex flex-wrap content-start py-6 px-6 pd:py-12 md:px-56">
          <Suspense
            fallback={
              <div className="h-full w-full flex flex-wrap items-center content-center justify-center">
                <span className="flex h-4 w-4 justify-center items-center">
                  <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/">
                {" "}
                <Landing />
              </Route>
              <Route path="/login">
                {" "}
                <Login />
              </Route>
              <Route path="/password">
                {" "}
                <Password />
              </Route>
              <Route path="/audio-features">
                {" "}
                <PersonalAudioFeatures />
              </Route>
              <Route path="/favourite-tracks">
                {" "}
                <Favourites />
              </Route>
              <Route path="/favourite-artists">
                {" "}
                <Favourites tracks={false} />
              </Route>
              <Route path="/search-panel">
                {" "}
                <SearchPanel />
              </Route>
              <Route path="/genres">
                {" "}
                <Genres />
              </Route>
              <Route path="/track-detail">
                {" "}
                <TrackDetail />
              </Route>
              <Route path="/playlists">
                {" "}
                <Playlists />
              </Route>
              <Route path="/playlist-detail">
                {" "}
                <PlaylistDetail />
              </Route>
              <Route path="/artist-detail">
                {" "}
                <ArtistDetail />
              </Route>
            </Routes>
          </Suspense>
          {location.pathname !== "/" && (
            <div
              className="fixed bottom-6 bg-white flex justify-center w-20 border-2 rounded-md p-2 cursor-pointer hover:border-green-500"
              onClick={() => history("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current text-green-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
                <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
              </svg>
            </div>
          )}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
