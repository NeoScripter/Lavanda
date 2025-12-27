import { jsx } from "preact/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "preact-render-to-string";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.toString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({});
      return pages[`./pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
