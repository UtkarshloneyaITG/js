import axios, { Axios } from 'axios'
const url = "https://jsonplaceholder.typicode.com/comments" //get with param postId : 1
// const url = "https://ai-agent-steel-ten.vercel.app/api/v1/Auth/Signup" //post
// const url = "https://jsonplaceholder.typicode.com/posts" //get
// axios(url).then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.log(err)
// })

// async function getTodos() {
//     try {
//         const data = await axios.get(url, {
//             params: {
//                 postId: 1
//             }
//         });
//         console.log(data.data)
//     } catch (error) {
//         console.log("error", error)
//     }
// }

// async function signup() {
//     try {
//         const data = await axios.post(url, {
//             Name: "axios",
//             Email: "axio@gmail.com",
//             Password: "axios@123"
//         });
//         console.log(data.data)
//     } catch (error) {
//         console.log("error", error.message)
//     }
// }


// // console.log(getTodos())
// console.log(signup())

// async function getposts(id) {
//   try {
//     let ax = await axios.get(url+`/${id}`)
//     console.log(ax)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getposts(4)


async function getComments() {
  try {
    let ax = await axios(url, {
      params: {
        postId: 2
      }
    })
    console.log(ax)
  } catch (error) {
    console.log(error)
  }
}
getComments()