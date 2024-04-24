import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import './App.css';

const Home = React.lazy(() => import("../pages/home"));
const Arts = React.lazy(() => import("../pages/projects/arts"));
const Code = React.lazy(() => import("../pages/projects/code"));
const Music = React.lazy(() => import("../pages/projects/music"));


const AnimatedRoutes = withRouter(({ location }) => (
      <main>
        <Suspense>
           <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/arts" element={<Arts />} />
              <Route path="/music" element={<Code />} />
              <Route path="/code" element={<Music />} />
              <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
));

function AppRoutes() {
  return (
    <div className="s_c">

      <AnimatedRoutes />

    </div>
  );
}

export default AppRoutes;