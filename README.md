# Meal App
Seafood application that allows one to choose a series of appetizers and meals from a menu. The Cart, displayed with a modal, includes an itemized list that calculates the meal total. Adding and subtracting meals from cart is done with ease.

## ScreenShot
![image](https://user-images.githubusercontent.com/112737682/230701203-a461f183-294f-4198-9816-ddb80ccdf695.png)


![image](https://user-images.githubusercontent.com/112737682/230701232-4115fcc9-1784-4860-8c16-1ff74889cea2.png)

## Technology Stack
Front-End: HTML5, CSS, REACT, Node.js


## Run Code (Environment)
### Front-End Helpful Hints (for Node.js environment)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-react-app <project name>
> cd <project name>
> npm install --save react-router-dom
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```
### Back-End Helpful Hints (for Node.js environment)
- Configure Firebase Realtime Database
- Update the Firebase Rules for Fetch Testing:
```
{
  "rules": {
    ".read": true,
    ".write": false
  }
} 
```



## Resources & Helpful Hints:
- [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
