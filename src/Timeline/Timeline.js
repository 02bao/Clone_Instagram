import React, { useState } from 'react'
import './Timeline.css'
import Sugesstions from './Sugesstions'
import Post from './Posts/Post'

const Timeline = () => {

  const [posts, setPosts] = useState([
    {
      user: "Bao",
      postImage: 
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/321250249_1288093185083325_8284397469139826903_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lEp7XrISjDkAX-2gE0u&_nc_oc=AQlTOyNaFis5d3Iii2WR3ubKJ8HPbaIjU00mhvw3GFH7DucO4NoO5vo4gQpw7CPYGrM&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBqiIQzZXbireUqXephrMPX2uAY6A9mrB2rzzZ_QNQF2A&oe=659AC67C",
      like: 12,
      timespamp: "2d",
    }, {
      user: "Thao",
      postImage: 
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/404992198_1399367130649142_25583869915834911_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=aYINFq69M4wAX_i2I0x&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfA1eNpuM1TYnKdOxY1P06zrEmYlpf_9MaTHHJPWlef_iA&oe=659B5243",
      like: 1000,
      timespamp: "10h",
    }, {
      user: "Cut",
      postImage:
       "https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU",
      like: 50,
      timespamp: "5p",
    },
    {
      user: "Meo",
      postImage:
       "https://vietabinhdinh.edu.vn/wp-content/uploads/1675055073_137_Tong-hop-Meme-Meo-de-thuong-hai-huoc-nhat.jpg",
      like: 200,
      timespamp: "5p",
    },
  ])

  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className='timeline_post'>
          {posts.map(post => (
            <Post
               user={post.user}
               postImage={post.postImage} 
               like={post.like}
               timespamp={post.timespamp}/>
          ))}
        </div>
      </div>
      <div className='timeline_right'>
        <Sugesstions/>
      </div>
    </div>
  )
}

export default Timeline