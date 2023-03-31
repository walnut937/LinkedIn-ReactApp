import React, {useState} from 'react'
import { Avatar } from '@mui/material'
import Img1 from '../Assets/me.jpg'
import FeedOption from './FeedOption'
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
function Feed() {
  //states

  const [posts, setposts] = useState([]);



  return (
    <>
        <div className='flex-[0.4] '>
          <div className='feed_container bg-white rounded-md p-3 gap-3 flex flex-col border-[1px] border-gray-300'>
            <div className='feed_input flex items-center gap-3'>
              <Avatar src={Img1}/>
              <button className='p-2 text-sm pl-4 text-gray-500 rounded-3xl w-full text-left border-[1px] border-slate-500 hover:bg-gray-200'>Start a Post</button>
            </div>
            <div className='feed_uploadOptions flex items-center gap-2'>
              <FeedOption title='Photo' Icon={ImageIcon} Color='#039dfc'/>
              <FeedOption title='Video' Icon={SmartDisplayIcon} Color='#039910'/>
              <FeedOption title='Event' Icon={EventIcon} Color='#e8963f'/>
              <FeedOption title='Article' Icon={NewspaperIcon} Color='#e83f3f'/>
            </div>
          </div>
          {posts.map((post) =>(
            <Post/>
          ))} 
          <Post name='Aditya panda' desc='Web Developer' year={2} message='Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).'/>

          <Post name='Abhishek Mishra' desc='App Developer' year={1} message='Image result for app Development definition Mobile application development is the process of creating software applications that run on a mobile device.'/>

          <Post name='Bikki Mishra' desc='Devops Engineer' year={4} message='A DevOps engineer is an IT generalist who should have a wide-ranging knowledge of both development and operations, including coding, infrastructure management, system administration, and DevOps toolchains.'/>

          <Post name='Anik Ahikari' desc='AI developer' year={4} message='Artificial intelligence (AI) engineers are responsible for developing, programming and training the complex networks of algorithms that make up AI so that they can function like a human brain.'/>

          <Post name='Nitesh' desc='Data Analyst' year={3} message='Data analysts examine information using data analysis tools and help their teams develop insights and business strategies. '/>

          <Post name='Ankur Kumar' desc='Cyber Security' year={2} message='Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. '/>

          <Post name='Puja Paul' desc='Backend Developer' year={1} message='Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.'/>
        </div>
    </>
  )
}

export default Feed