20171216 Angular 101 - workshop 3rd

--------------
목차
1. deploy
2. Angular Universal (서버사이드 렌더링)
3. Angular Material  (스타일 프레임워크 입혀보기)
4. Angular Unit Test (단위테스트 해보기_Karma/Jasmine)

--------------
## 1. deploy

----------------

## 2. Angular Universal (서버사이드 렌더링)

----------------

## 3. Angular Material  (스타일 프레임워크 입혀보기)

----------------

## 4. Angular Unit Test (단위테스트 해보기_Karma/Jasmine)
### 유닛테스트를 하는 이유
- 사람을 믿으시겠습니까 ?
  - 실제로는 그냥 사람의 감이다.
- 테스트 코드를 믿으시겠습니까 ?
  - 코드는 거짓말을 하지 않습니다.
- 통합테스트에 비해 빠르고 쉽습니다.
- 통합테스트를 진행하기 전에 문제를 찾아낼 수 있습니다.
  - 그렇다고, 통합테스트가 성공하리란 보장은 없습니다.
- 테스트 코드가 살아있는(동작을 설명하는) 명세가 됩니다.
  - 테스트를 읽고 어떻게 동작하는지도 예측 가능합니다.
- 소프트웨어 장인이 되려면 해야죠..
  - 선 코딩 후 (몰아서) 단위테스트가 아니구요

### Karma 
테스트를 실행해주는 테스트 러너

### Jasmine
테스트 코드를 작성하는 문법

### 실습 ([demo](https://github.com/2woongjae/angular-unit-test-basic1))
- 폭이 좁은 케이스
- 폭이 넓은 케이스
- 클릭 이벤트를 걸려있는 컴포넌트 테스트여도, 스탭을 나눠서 상황을 만든다. 
  ```ts
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

```

- 컴포넌트가 정상적으로 생성된다.
- 컴포넌트가 생성되면 버튼 엘리먼트가 생성되어 null 이 아니다. `보폭이 좁은 케이스`
- 버튼 엘리먼트에 써있는 텍스트는 "ts-button" 이다.
- 버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다.
- 버튼을 클릭하기 전에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.
- 버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.
- 버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.

----------------
