import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoice';
import Invoices from './routes/Invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <b>Select an invoice</b>
              </main>
            }
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

/*
<Route path="/" element={<App />}>
  <Route path="expenses" element={<Expenses />} />
  <Route path="invoices" element={<Invoices />} />
</Route>
위와 같은 형태로 nesting 가능하다. 이렇게 설정해두면 url을 확인할 때 / -> expenses | invoices 순서로 확인
nesting 했으면 하위 컴포넌트들의 부모 컴포넌트 내부의 원하는 곳에 <Outlet/> 지정해주면 자식 노드가 하위에 렌더된다.
*/
