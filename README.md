# ๐ todolist ๋ง๋ค๊ธฐ
* ๋ฒจ๋กํผํธ์ todolist ๋ง๋ค๊ธฐ๋ฅผ ํ ๋๋ก json-server ๋ฒ์ ์ผ๋ก ๋ณ๊ฒฝํ์์ต๋๋ค.
* ์คํ์ผ์ ๋ฐ๋ก ํ๋กํ ํ์ ์ ์ํ์ง ์๊ณ  ๋ง๋ค์์ต๋๋ค.
* [๋ฐฐํฌ ํ์ด์ง ๋งํฌ](https://suryeon-lee.github.io/proj-todolist/) - json-server๋ฅผ ์ด์ฉํ ๊ฐ๋ฐ์ฉ ์๋ฒ๊ฐ ์ฐ๊ฒฐ๋์ด ์๊ธฐ ๋๋ฌธ์ ๋ก์ปฌ์ ๋ค์ด๋ฐ์ ์๋ฒ๋ฅผ ์ผ์ผ ๊ธฐ๋ฅ์ ๋ชจ๋ ํ์ธํ  ์ ์์ต๋๋ค.   

<br/><br/>

## ๐ก ๋ฏธ๋ฆฌ๋ณด๊ธฐ
![๋ฏธ๋ฆฌ๋ณด๊ธฐ](./screenshot.gif) 

<br/><br/>

## ๐ ์์ํ ์๋ฌ ํธ๋ค๋ง
* gh-pages๋ฅผ ์ด์ฉํด์ ๊นํ๋ธ ํ์ด์ง์ ๋ฐฐํฌ์ค ์๋ฌ๊ฐ ๋ฌ๋๋ฐ, ๋ฐฐํฌํ๋ฉด์ ์๋ฌด๊ฒ๋ ์๋ณด์ด๋ ํ์์ด ๋ฐ์ํ๋ค.
```bash
    :ERR_ABORTED 404 on github pages #๋์ถฉ ์ด๋ฐ ๋ฉ์ธ์ ์๋ค.
```
[๋งํฌ](https://intrepidgeeks.com/tutorial/everything-deployed-by-gh-pages)๋ฅผ ์ฐธ๊ณ ํ์ฌ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ์๋ค.
```js
    //index.js

    //...์ค๋ต
    import { BrowserRouter } from 'react-router-dom';

    //...์ค๋ต
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        //BrowserRouter๋ก ๊ฐ์ธ๊ณ  basename์ ๊ธฐ๋ณธ ํ๊ฒฝ๋ณ์ ๋ฃ๊ธฐ 
        //๋ฃจํธ์ repository๋ฅผ ์ผ์น์์ผ์ฃผ๋ ๊ณผ์ 
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <React.StrictMode>
            <App />
            </React.StrictMode>
        </BrowserRouter>
    );
```