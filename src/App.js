function Title(props) {
  return <h1>{props.children}</h1>;
}

function Page(props) {
  return <div className="page">{props.children}</div>;
}

function App() {
  return (
    <Page>
      <Title>Hello world!</Title>
      <p>Welcome to my page</p>
    </Page>
  );
}
export default App;
