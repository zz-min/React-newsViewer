# 페이지 라우팅

라우팅 동작 : 서버에 req를 보내는 것.<br>
라우팅 동작을 넓게 해석해보면 서버에 req를 보내고, res를 받아서 해당 res를 화면에 해석해서 표현하는 것까지.<br>

**Browser Routing**은 사용자가 요청하면(url 직접 입력, form submit, 뒤(앞)로가기, 하이퍼링크 클릭 등) 서버에 request를 보내고 response를 받는다.
이러한 경우에는 multi page application(MPA)
MPA는 여러개의 페이지 (여러개의 html 파일)로 구성된 어플리케이션으로, 새로운 페이지 요청할 때마다 서버에서 렌더링 된
정적 리소스들(HTML, CSS, JS)가 다운로드 됨

반면에 **SPA**(Single Page Application)은 하나의 페이지로만 (하나의 HTML 파일) 구성된 앱.<br>
SPA는 브라우저에게 라우팅을 위임하지 않음 (브라우저가 라우팅을 하게 되면 매번 요청을 전송하고 서버에서 렌더링된 리소스들을 매번 받아오니까)

따라서 SPA 방식을 사용하면 해당 어플리케이션 내에서 라우팅을 수행해줘야 함 (클라이언트 측에서 담당)

---

어플리케이션 내부적으로 라우팅을 수행하기 위해서 리액트의 경우에는 라이브러리를 제공한다.

## react router에서 라우팅을 위한 3가지 주요 개념

1. Subscribing and manipulating the history stack - **히스토리 스택**을 모니터링
2. Matching the URL to your routes - 히스토리 스택에 변화가 발생할 시, 이에 맞는 url 매핑
3. Rendering a nested UI from the route matches - 해당 url을 찾아서 렌더링

(히스토리 스택은 사용자 요청에 따라서 push, pop, replace된다)<br>
리액트 라우터는 위의 동작을 위해서 History라는 객체를 제공한다.

- 히스토리 스택에 저장
- window.location와 유사한 Location (window.location은 url에 대한 정보를 제공하는 객체)
- 라우터 객체가 매핑 수행

```jsx
{
  pathname: "/bbq/pig-pickins",
  search: "?campaign=instagram",
  hash: "#menu",
  state: null,
  key: "aefz24ie"
}
```

### route 정의하기

route config는 트리 형태

```jsx
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

라우트 트리 설정 시 주의할 점
: url이 /teams/123이라면 라우터는 해당 url을 계층적으로 탐색함
즉 / -> `<App>`
teams-> `<Teams>`
/123-> `<Team>`

`<Link>` 컴포넌트 : `<a>`를 사용할 수 없으니까 (`<a>`태그는 브라우저로 바로 req를 보내기 ㄱ떄문에), `<a>`를 래핑하는 객체를 제공
