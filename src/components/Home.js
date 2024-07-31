import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Navigation from './Navigation'

function Home() {

  return (
   
    <div className='App'>
<Navigation></Navigation>
      <h2>Beauty of Nature</h2>
        <img src='https://th.bing.com/th/id/OIP.jHvTOSF7924Ah63W7mozxQHaEo?rs=1&pid=ImgDetMain'></img>
        <h2>Introduction to the Nature Story</h2>
        <p>This beautiful passage is one of the simplest and most appealing short stories based on the environment. We, humans, are alive only because of our nature. Still, we continue to exploit it recklessly. We all must know the importance of mother nature and the consequences of troubling it. Therefore, this beautiful Nature story is one of the simplest ways to make kids understand the beauty and the power of nature. The story is about a young boy who got attracted to nature's beauty while playing in the garden and witnessed its power when he tried to change it. In the end, his mother beautifully explains everything about nature and its process. Given below is a summary of the story that will make the concepts more clear.
        </p>
        <img src='https://m.media-amazon.com/images/I/81RB+Kb6AqL._AC_UF1000,1000_QL80_.jpg'></img> 
        <br></br>
        <br></br>
        <Link to="/">Login Page</Link>


    </div>
  )
}

export default Home