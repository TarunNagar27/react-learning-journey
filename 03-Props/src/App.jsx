import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Tarun Nagar' p = 'Hey, im a Developer' img = 'https://plus.unsplash.com/premium_photo-1739104471549-3fba06cd43e8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      btn = "View Profile"/>
      <Card user='Harsh Sharma' p = 'Hey, im a Gamer' img = 'https://images.unsplash.com/photo-1734324931475-d793ace1066e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
      btn = "View Profile"/>
      <Card user='Trisha Kapoor' p = 'Hey, im a Influencer' img = 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      btn = "View Profile"/>
    </div>
  )
}

export default App