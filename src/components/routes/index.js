import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    private: false,
    component: lazy(() => import("../../pages/Home")),
  },
  {
    path: "/tasks",
    exact: false,
    private: true,
    component: lazy(() => import("../../pages/Tasks")),
  },
  {
    path: "/signin",
    exact: false,
    private: false,
    component: lazy(() => import("../form/Form")),
  },
  {
    path: "/signup",
    exact: false,
    private: false,
    component: lazy(() => import("../form/Form")),
  },
];
