// //  <div class="parent1">
// //     <div class="child">
// //         <h1>Heading</h1>
// //     </div>
// // </div> 
// //  <div class="parent2">
// //     <div class="child">
        <h1 id="heading">Heading</h1>
// //     </div>
// // </div> 
import React from 'react'
import ReactDOM from 'react-dom/client'


const temp = React.createElement([
    'div',{className:'parent1'},
    React.createElement('div',{className:'child1'},
        React.createElement('h1',null,"Headding")
    ),
    'div',{className:'parent2'},
    React.createElement('div',{className:'child2'},
        React.createElement('h1',null,"Headding")
    )
]
)
console.log(temp)




const heading = React.createElement('h1', {id:'heading'}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)