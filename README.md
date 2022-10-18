# 🗒 todolist 만들기
* 벨로퍼트의 todolist 만들기를 토대로 json-server 버전으로 변경하였습니다.
* 스타일은 따로 프로토타입 제작하지 않고 만들었습니다.
* [배포 페이지 링크](https://suryeon-lee.github.io/proj-todolist/) - json-server를 이용한 개발용 서버가 연결되어 있기 때문에 로컬에 다운받아 서버를 켜야 기능을 모두 확인할 수 있습니다.   

<br/><br/>

## 💡 미리보기
![미리보기](./screenshot.gif) 

<br/><br/>

## 🐛 소소한 에러 핸들링
* gh-pages를 이용해서 깃허브 페이지에 배포중 에러가 났는데, 배포화면에 아무것도 안보이는 현상이 발생했다.
```bash
    :ERR_ABORTED 404 on github pages #대충 이런 메세시 였다.
```
[링크](https://intrepidgeeks.com/tutorial/everything-deployed-by-gh-pages)를 참고하여 문제를 해결하였다.
```js
    //index.js

    //...중략
    import { BrowserRouter } from 'react-router-dom';

    //...중략
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        //BrowserRouter로 감싸고 basename에 기본 환경변수 넣기 
        //루트와 repository를 일치시켜주는 과정
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <React.StrictMode>
            <App />
            </React.StrictMode>
        </BrowserRouter>
    );
```