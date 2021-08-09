const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/upwork-site/src/index.js</pre>
    </>
  );
};

export default {
  name: "upwork-site",
  roots: {
    awesometheme: Root
  },
  state: {
    awesometheme: {}
  },
  actions: {
    awesometheme: {}
  }
};
