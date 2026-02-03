import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const books = useSelector((state)=> state.books.items);
  console.log(books)
  return (
    <div>Home</div>
  )
}

export default Home