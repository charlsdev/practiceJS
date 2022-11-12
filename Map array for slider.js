const images = [
   {
      "title": "IMAGE 1",
      "content": "Web Devoloper<br />Subscribe To My Channel For More Videos",
      "img": "/img/img1.jpg"
   }, {
      "title": "IMAGE 2",
      "content": "Web Devoloper<br />Subscribe To My Channel For More Videos",
      "img": "/img/img2.jpg"
   }, {
      "title": "IMAGE 3",
      "content": "Web Devoloper<br />Subscribe To My Channel For More Videos",
      "img": "/img/img3.jpg"
   }, {
      "title": "IMAGE 4",
      "content": "Web Devoloper<br />Subscribe To My Channel For More Videos",
      "img": "/img/img4.jpg"
   }, {
      "title": "IMAGE 5",
      "content": "Web Devoloper<br />Subscribe To My Channel For More Videos",
      "img": "/img/img5.jpg"
   }
]

const data = images.map((a, b) => {
  return a.title
})

console.log(data)