// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }



// function MainContent(){
//     return (
//         <h1>
//             I am learning React!
//         </h1>
//     )
// }
// ReactDOM.render(
//     <div>
 
//     <Navbar />
//     <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// // REACT IS DECLARATIVE 
// /*Imperative way o program (telling a each step what to do) */
// // const h1 = document.createElement("h1")
// // h1.textContent = "THIS IS DONE THROUGH IMPERATIVE WAY!"
// // h1.className = "header"
// // console.log(h1)





// // BUILD A REACT INFO | JSX
// // JSX 
// const element = <h1 className="header">This is JSX</h1>
// console.log(element)
// ReactDOM.render(element,document.getElementById("root"))


// // above can also be written as 
// ReactDOM.render(
//         <h1 className="header">This is JSX</h1>,
//         document.getElementById("root")
//         )


// // In JSX we need to make sure tha we are returning single parent element
// // In other words we cannot attempt to render 2 sibling elements side by side
// // like this 
// // ReactDOM.render(
// //     <h1 className="header">This is JSX</h1><p>This cannot be done!</p>,
// //     document.getElementById("root")
// //     )
// // PROBLLEM IN CONSOLE: // 	"message": "JSX expressions must have one parent element.",


// // BUT THE ABOVE CAN BE DONE IF WE WRAP BOTH h1 and p IN A DIV(DIV IS PARENT ELEMENT)
// ReactDOM.render(
//     <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This can be done!</p>
//     </div>,
//     document.getElementById("root")
//     )

// // ANOTHER WAY TO DO THIS IS:
// const page = (  
//         <div>
//             <h1 className="header">This is JSX</h1>
//             <p>This can be done!</p>
//         </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )


// //CHALLENGE to create a navbar using JSX

// ReactDOM.render(
//     <nav>
//         <h1>QuantaVista</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>,
//     document.getElementById("root")
// )


// // 2nd Way 
// const navbar = (
//     <nav>
//     <h1>QuantaVista</h1>
//     <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// </nav>
// )


// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


// const Challenge = (

//    <div>
//        <img src="logo192.png" width="48px"></img>
//        <h1>Fun Facts about React</h1>
//        <ul>
//        <li>Was first Released in 2013</li>
//        <li>Was originally created by Jordan Walka</li>
//        <li>Has well over 100k stars on Github</li>
//        <li>is maintained by Facebook</li>
//        <li>Powers thousands of enterprise apps, including mobile apps</li>
        
//        </ul>
//     </div>

    
// )


// capital letter for functions
// Component
// function Temp() {
//     return(
//     <div>
//        <img src="logo192.png" width="48px"></img>
//        <h1>Fun Facts about React</h1>
//        <ul>
//             <li>Was first Released in 2013</li>
//             <li>Was originally created by Jordan Walka</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
        
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(<Temp />,document.getElementById("root"))

// import Rect from "react" cuz jsx syntax is defined in react
// console.log(page) will show js object in console
// We cannot put 2 siblings together.
// declarative means: tell what to do and it know what to do while in imperative we have to tell each step what to do
// composale means small piece we can put together to make something greater

// Challenge-1 for making component
// function Page() {
//     return(
//         <div>
//             <h1>Reasons why I am excited to learn React</h1>
//             <ol>
//                 <li>Money</li>
//                 <li>Money</li>
//                 <li>Money</li>
//                 <li>Money</li>
//             </ol>
//         </div>
//     )
// }


// ReactDOM.render(<Page />,document.getElementById("root"))



//challenge-2 for components

function Header() {
    return(
     
        <header>
        <nav>
            <img src="logo192.png" width="48px"></img>
            </nav>
            </header>
        
    )
}

function Hero(){
    return(
        <div>
        <h1>Reasons why I am excited to learn React</h1>
        <ol>
            <li>Money</li>
            <li>Money</li>
            <li>Money</li>
            <li>Money</li>
        </ol>
        </div>
    )
}


function Footer (){
    return(
        <footer>
                     <p>c 2024 Maaz development. All rights reserved.</p>
                </footer>
    )
}
function Page () {
    return(
        <div>
            <Header />
            <Hero />
            <Footer />
                
        
        </div>
         
    )
}





ReactDOM.render(

    
    <Page />,
    document.getElementById("root")
)