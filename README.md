# Modern MERN

This module will cover:
- 🛡 Type-safe coding with TypeScript
- 💅 Building a flexible design system with `styled-components`
- 🔳 CSS Grid and Flexbox in action
- 🛣 Scalable Express Routing with Express' `Router` constructor
- 🕑 Preventing asynchronous spaghetti 🍝 with `async` / `await` and `Promise`s
- 🌳 React state management with the React Context API
- 📊 Data visualization with Nivo and custom solutions
- ⛩ Portals
- 👨‍👩‍👧 Real-world associations in Mongoose via `populate`
- 🎣 Introduction to Hooks
- 👩‍🔬 Real world application of the infamous Fibonacci interview problem

# What we're building: 

## Sprint
A sleek todo application allowing you to assign point value estimates to subtasks and visualize how far along you are in a project.

![design spec](assets/Sprint.png)

## Prerequisites
Make sure you have the following installed on your machine before you proceed:
- Node.js
- `create-react-app` (version 2 is required for scaffolding the React app with TypeScript config)
- `nodemon`
- MongoDB, `mongod`, and Robo 3T or Compass for visualizing data with MongoDB


# Code-along

## Project Scaffolding

We're starting completely from scratch here, so there is no starter code. Create a directory called whatever you'd like to call your personal take on the project.

**Command Line**
```
# initialize a new repo
git init

# create a root level .gitignore to ignore node_modules and auto-generated folders in version control
touch .gitignore

echo node_modules >> .gitignore
echo dist >> .gitignore
echo client/node_modules >> .gitignore
echo client/build >> .gitignore
echo .DS_Store >> .gitignore
```

Now for initializing our Node project. `-y` says 'yes' to all of npm's questions and builds your package.json immediately:
```
npm init -y
```
With npm all set, let's install TypeScript and the server-side dependencies we're going to use:

```
npm i --save-dev typescript tslint morgan
```
While that's going, let's talk a bit about the elephant in the room.

#### Why TypeScript?
![typescript](assets/typescript.png)

TypeScript is a superset of JavaScript, meaning that it can do everything JavaScript can do with the same syntax, but with numerous extras. It gives us many of the language conventions of other object oriented languages that JavaScript doesn't currently have, like enums, interfaces, and notably bringing ES7 modules to Node, and compiles them all down to JavaScript that the browser / V8 can understand. Yay, new stuff to make our development experience nicer, right?

Wrong--at least, initially. If you haven't worked with TypeScript and JavaScript was your first scripting language, TypeScript is going to be a royal pain to work with, because it introduces **static typing**, and in many cases removes the developer's reliance on the type inference that is so inherent in the JavaScript language. It forces you to think a bit deeper as you code, but in doing so, it eliminates potential bugs before you even finish writing the line of code at hand. Emotionally, when I was learning TypeScript, I felt personally attacked, and my productivity took a nosedive. I promise, though, that **the more experience you get with TS, you'll start to thank it for catching things you missed, you'll have more confidence that the code you write isn't going to break in production, and you ensure code integrity between the other collaborators on your team.**

#### Configure TypeScript for the Backend
At the root of your project (same level as the package.json), create a tsconfig.json and tslint.json, which will configure the TypeScript compiler and linter respectively.

**tslint.json**
```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false
    },
    "rulesDirectory": []
}
```
The tslint.json is a lot like the eslint.json--it contains rules for your linter. Feel free to add more rules here as you begin to get comfortable with TS.

**tsconfig.json**
```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"],
  "exclude": ["client"]
}
```
This config is really important to get right, so I'd recommend copying and pasting directly into your project. The most important parts to note are the `"outDir"` property (the value we've provided tells TS to put the compiled JS into a dist folder at the same root level of our project), and the `"exclude"` array tells TS not to worry about compiling the client folder, whose own tsconfig will be configured by create-react-app.

Switch over to the package.json, because we're going to have some scripts and path configurations to add:

1) Overwrite the `"main"` value to `"dist/server.js"`, so that the file is pointed to the compiled JS as the entry point to the app.
2) Add the following scripts:

**package.json**
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node dist/server.js",
    "start:watch": "nodemon --inspect=5858 -r ts-node/register ./src/server.ts"
  },
```

What we're doing here is affording ourselves the beautiful `nodemon` experience of watching for changes to files upon running `npm run start:watch`. So, that's the command we're going to use from here on out to start our server-side. We've also afforded ourselves a little deployment "pipeline" that builds the TypeScript into JS that the V8 environment can understand and places it into a dist folder where our `"start"` script can find it.

3) Add the following `"nodemonConfig"`:

**package.json**
```
  "nodemonConfig": {
    "ignore": [
      "**/*.test.ts",
      "**/*.spec.ts",
      ".git",
      "node_modules",
      "client"
    ],
    "watch": [
      "src"
    ],
    "exec": "npm start",
    "ext": "ts"
  },
```
Most notably, this will tell `nodemon` to ignore changes to the file system if they're made to test files, if changes are committed with Git, or if modules are installed, and we certainly don't want our server to restart every time we make changes to our React application.

## Server Side Folder Structure
This was mentioned in passing before, but it's good to reiterate. Because TypeScript needs to compile to JavaScript to run in Node's V8 environment, we need to make sure that all of our server-side TypeScript goes inside a `src` folder. So, with that, our app will look like this:
```
client/
dist/
node_modules/

src
  |- api/
  |- config/
  |- controllers/
  |- environments/
  |- models/
  |- seeds/
  |_ server.ts

package.json
tsconfig.json
tslint.json
.gitignore
README.md
```
Go ahead and create all of this.

Inside of your src/server.ts (that's not a typo--yes, `.ts`), we're just going to get our feet wet with TypeScript with a simple `Greeting` class--we won't be using it in the actual application, so don't get too attached. Copy this code in there, and let's dissect it:

**src/server.ts**
```
class Greeting {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static printHello = (): void => console.log('Hello, TypeScript');
  
  public printPersonalizedGreeting = (): void => console.log(`Hello, ${this.name}`);
}

// invoke a stqtic method -- don't have to instantiate before calling (think Array.isArray() or Object.keys())
Greeting.printHello();

// instantiate a Greeting class and call its presonalized greeting method
const helloYourNameHere: Greeting = new Greeting('YourNameHere');
helloYourNameHere.printPersonalizedGreeting();
```

`private`, `public`, and `protected`? WTF is this, Java? I mean... it's way closer to Java than JavaScript was on its own. Notice the weird colons everywhere? That's how we specify the data type for each variable we declare. We can even set the return type on functions by putting a colon and a type after our parameter lists; oh, and look at the parameter list for the contructor! There's a type declaration in there too!

The first question you likely have is "Why do I care about the types? It's just extra... typing." 🤦‍  The answer will become apparent the more you use TypeScript. If the linter knows what type your variables and return types are, and you suddenly do something in your code that unexpectedly changes that variable type or doesn't return the expected value, the linter or a complete failure to compile will let you know. Congratulations, you just resolved a bug without even having to evaluate the behavior of the running application. The small wins really add up.

Okay. How do we actually run this? It's a `.ts` file and `node` doesn't know what the heck to do with it. The thing is, we need to compile the TS first in order to run it and the `ts-node` package is what will do that for us. We're going to have to run some one-off .ts seed files later on, so let's just install `ts-node` globally. You could opt for `npx` too, if you're not sure you're going to use TypeScript beyond this application.

**Command Line (from `src/`)**
```
# For you non-npx'ers, or if you're all in on TypeScript already:
npm i -g ts-node
ts-node server.ts

# For you npx'ers, or TypeScript skeptics:
npx ts-node server.ts
```

While we're at it, let's try running the script by using our npm script we added to the package.json. We're going to use that almost entirely to run our server side, so let's make sure that's good to go:

**Command line (from the root of the project)**
```
npm run start:watch
```











