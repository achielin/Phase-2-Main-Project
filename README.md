Requirements
You must make a single page application (only one index.html file) using create-react-app
Your app should use at least 5 components in a way that keeps your code well organized
There should be at least 3 client-side routes using react-routerLinks to an external site.
Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Additionally, you may choose to incorporate data from an external API but it is not required.
You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
Stretch Goals
Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like.

Some ideas for stretch goals:

Incorporate data from an external API. Use this list of APIsLinks to an external site. if you need some inspiration!
Add some styling: you're encouraged to write your CSS from scratch, either by using styled-componentsLinks to an external site. or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like react-bootstrapLinks to an external site., semantic-uiLinks to an external site. material-uiLinks to an external site.) if you prefer.
Setup
For this project, you will need two separate repositories: one for your frontend and one for your backend. This will make it easier to deploy your project later, should you choose to do so.

Frontend Setup
Use create-react-app to generate starter code for your your project. Follow the instructions on the create-react-appLinks to an external site. site to get started.

Backend Setup
You can use this json-server templateLinks to an external site. to generate your backend code. Using this template will make it easier to deploy your backend later on.

If you prefer, instead of using the template, you can create a db.json file with a structure in the root of your project that looks like this:

{
  "toys": [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    }
  ]
}
Then, assuming you have json-server installed globally, you can run this command to run the server:

 json-server --watch db.json
Whatever top-level keys exist in your db.json file will determine the routes available. In the example above, since we have a key of toys pointing to an array of toy objects, json-server will generate the following routes:

GET /toys
POST /toys
GET /toys/:id
PATCH /toys/:id
DELETE /toys/:id