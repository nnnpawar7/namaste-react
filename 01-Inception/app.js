const heading = React.createElement("div", { className: "test1" }, [
  React.createElement("div", { id: "para1", key:"para1" }, [
    React.createElement("h1", { id: "para2", key:"para2" }, "This is paragraph1"),
    React.createElement("h1", { id: "para3", key:"para3" }, "This is paragraph2"),
  ]),
  React.createElement("h1", { id: "para4", key:"para4" }, "This is paragraph3"),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
