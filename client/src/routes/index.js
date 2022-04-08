import React from "react";
import { useRoutes } from "react-router";
import Main from "../pages/Main";
import Registration from "../pages/Registration";

export default function ThemeRoutes() {
    return useRoutes(
        [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/registration",
                element: <Registration />
            },
        ]
    );
  }