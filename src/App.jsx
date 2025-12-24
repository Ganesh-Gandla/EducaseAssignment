import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import PageContext from './context/PageContext';

function App() {
  const navigate = useNavigate();
  const { pages, pageIndex, setPageIndex } = useContext(PageContext);

function handleClick(newIndex){
  setPageIndex(pageIndex => newIndex)
  navigate(pages[newIndex]);
}


  return (
    <>
      <Outlet />
      <div className='pagination'>
        <Link to={"/"}><img src="./home.svg" alt="" width={"28px"} height={"28px"} onClick={e => setPageIndex(0)}/> </Link>       
        <button disabled={pageIndex === 0} onClick={()=>handleClick(pageIndex-1)}>
        <img src="./left.svg" alt="" width={"38px"} height={"38px"}/>
        </button>
        <p >{pageIndex + 1}  of  4</p>
        <button disabled={pageIndex === pages.length - 1} onClick={() => handleClick(pageIndex+1)}>
          <img src="./right.svg" alt="" width={"38px"} height={"38px"}/>
        </button>


      </div>
    </>
  )
}

export default App
