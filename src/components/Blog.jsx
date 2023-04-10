import React from "react";

const Blog = () => {
  return (
    <div className="w-5/6 mx-auto mt-10">
      <h3 className="blogTitle">A. When should we use context API?</h3>
      <p className="text-lg mb-6">
        The Context API is a feature in React that allows to share data between
        components without having to pass the data through props at every level
        of the component tree.
        <br /> uses of context API given bellow:- <br />
        1. The Context API helps share data between components which can not
        easily share with props, for complex data objects. <br />
        2. React Context API provides a way to send data like userid, auth, and
        theme data through the component tree without sending any props manually
        at every level. <br /> 3. We can also share specific states with
        multiple components instead through props manually. In some use cases,
        ideal for theming, localization, authentication etc. <br /> 4. The
        Context API can be used in combination with the useReducer or useState
        hooks to create a global state management solution that can be accessed
        by different components.{" "}
      </p>
      <h3 className="blogTitle">B. What is a custom hook?</h3>
      <p className="text-lg mb-6">
        A custom hook is a JavaScript function that uses one or more of the
        built-in React hooks (such as useState, useEffect, useContext, etc.) and
        other custom hooks to encapsulate some reusable logic or stateful
        behavior that can be shared across multiple components. Custom hooks
        allow to abstract away complex logic or state management code and
        provide a simple interface for other components to use. Custom hooks
        follow a naming convention that begins with the word "use", which is a
        requirement for all hooks. By using the "use" prefix, React recognizes
        that the function is a hook and it can be used with the built-in hooks
        and other custom hooks.
      </p>
      <h3 className="blogTitle">C. What is useRef?</h3>
      <p className="text-lg mb-6">
        useRef is a built-in hook in React that returns a mutable ref object.
        This ref object can be used to store a value that persists across
        renders and updates, similar to an instance variable in a class
        component. <br /> Uses of useRef are given bellow:- <br />
        1. Managing focus, text selection, or media playback. <br />
        2. Integrating with third-party DOM libraries. <br />
        3. Triggering imperative animations.
      </p>
      <h3 className="blogTitle">D. What is useMemo?</h3>
      <p className="text-lg">
        useMemo is a React Hook that lets cache the result of a calculation
        between re-renders. <br />
        Uses of useMemo are given bellow:- <br /> 1. Skipping expensive
        recalculations. <br /> 2. Skipping re-rendering of components <br />
        3. Memoizing a dependency of another Hook <br />
        4. Memoizing a function
      </p>
    </div>
  );
};

export default Blog;
