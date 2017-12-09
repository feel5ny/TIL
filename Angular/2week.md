20171209 Angular 101 - workshop 2nd

--------------

## 1. Router

왜 갑자기 angular2에서 4로?
@angular/router가 다른 버전(2버전)에 비해서 3버전으로 달리고 있었다. 
다른 모듈과 맞추기 위해서 버전을 4로 정함

1. RouterModule 가져오기
2. 배열화해서 사용
3. 

```ts
RouterModule.forRoot() // 최상단에 설정
```
```ts
const routes: Routes = [ // 여기서 Routes는 @angular/router모듈에서 가져온 다입이다.
  {path: '', component: HomeComponent}, // path를 정하고, 패스로 갈때의 component를 설정
  {}
]
```
태그 추가
```ts
//app.component.html
// ...
<router-outlet></router-outlet>
// ...
```

### 1-1. routes로 분리하기

### 1-2. a태그로 이동하기
href대신에 routerLink로 바꾸면 이동이 가능
`routerLinkActive="active"` : active됐을때 스탕리링

cf. react
'/'와 '/about'의 영향을 안받게 하려면 `exact`

### 1-3. params 설정 및 컴포넌트에서 사용하기
- 동기
  - 
- 비동기
  - 옵져버블 + subscribe형태
  - `rx`
  - 여기서 map은 rx의 map이다.

--------------

## 2. Service

Invertion of Controll 제어의 역전

## 2-3. 여러가지 주입 방식
`useValue`
`useClass`
`useExisting`
`useFactory`
```ts
// app.module.ts
providers: [
    LogService,
    {
      provide: 'log', // provider의 이름을 주입
      useClass: LogService
    },
    {
      provide: 'apiUrl', // provider의 이름을 주입
      useValue: 'https://api.github.com/users'
    },
    {
      provide: 'factory', // provider의 이름을 주입
      useFactory: (logService) => {
        return new FactoryService(logService, false);
      },
      deps: [
        LogService
      ]
    }
  ],
```

--------------

## 3. HttpModule, Http
toPromise로 프로미스화 해야한다.

`<div *ngFor="let user of users">`
data를 map돌려서 뽑아내는 방법
`*ngFor` 스타일을 Directive라고 분린다.

--------------

## 4. Directive

- rx (Observable)
  startwith
- async/await

--------------
참고링크 : http://slides.com/woongjae/angular101-2
