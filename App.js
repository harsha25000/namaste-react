const parent = React.createElement("div",{id:"parent"}, 
                [React.createElement("div",{id:"child"}, [
                    React.createElement("h1", {}, "Hi There!"),
                    React.createElement("h2", {}, "I am Learning React from Akshay")
                ]),
                React.createElement("div",{id:"child1"}, [
                    React.createElement("h1", {}, "Hi There!"),
                    React.createElement("h2", {}, "I am Learning React from Akshay")
                ])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);