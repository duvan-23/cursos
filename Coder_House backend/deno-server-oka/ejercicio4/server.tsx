
import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import React from "https://jspm.dev/react@17.0.2";
import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
  
const App = () => {
    return (
      <div className="app">
        <h1>Hello! i was ready before i got here</h1>
        <ListItems/>
      </div>
    );
  }
  
class ListItems extends React.Component{
  render(){
    return(
      <ul>
        <button id="ma">Toggle on/off</button>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    );
  }
}
const app = new Application();
const body = ReactDOMServer.renderToString(<App />);
// serve a simple HTML page containing our rendered app
app.use((ctx)=>{
  ctx.response.body =`
  <!DOCTYPE html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body >

        <div id="root">${body}</div>
        <form action="/" method="post">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
    </body>
  </html>
  `;
});

app.listen({ port: 8000 });
console.log("App listening on port 3000");
//denon run --allow-net ./server.tsx