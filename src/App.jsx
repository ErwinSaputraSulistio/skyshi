import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "./pages/ActivityDetail"
import List from "./pages/ActivityList"

export default function App() {
  return (
    <>
      <div class="header">
        <div class="container" data-cy="header-background">
          <span class="header-title" data-cy="header-title">TO DO LIST APP</span>
        </div>
      </div>
      <div class="container" data-cy="view-home" style={{ margin: "auto", textAlign: "center" }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={ <List/> }/>
            <Route path="/detail" element={ <Detail/> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
