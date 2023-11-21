import React from 'react'

const commentsData = [
  {
    name: "Arifuddin",
    text: "Lorem ipsum dolor sit amet, consectetur adip,curious dedicative passionate lover",
    replies: [],
  },
  {
    name: "kunal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "karan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "kohli",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "shahrukh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "messi",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "ronaldo",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "cricket",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "trees",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "flowers",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "mango",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({data}) => {
    const{name,text,replies}=data;
    console.log(replies);
  return (
    <div className='flex shadow-sm my-3 bg-blue-200 p-2 rounded-lg '>
    <img className=" w-12 h-12"
       alt='user'
     src="https://i.pinimg.com/474x/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.jpg"/>  
    <div>
   <p>{name}</p>
   <p>{text}</p>
    </div>
    </div>
  )
}
const CommentsList=({Comments})=>{

 return Comments.map((comment,index)=>(
 <div key={index}> 
    <Comment  data={comment}  />
    <div className='pl-5 border border-l-black ml-5'>
    <CommentsList Comments={comment.replies}/>


    </div>
 </div>
    
  ) )
}

const CommentContainer = () => {
  return (
    <div  className='m-1 p-5'>
   <h1 className='text-2xl font-bold'>Comments:</h1> 
   <CommentsList Comments={commentsData}/>  
    </div>
  )
  }

export default CommentContainer

