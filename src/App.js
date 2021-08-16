import NavBar from './NavBar';
import Hero from './Hero'
import MediaSection from './MediaSection.js';
import CardSection from './CardSection';

const travelLocations = [
  {
    image: "https://images.unsplash.com/photo-1628887391400-0c8cc8f3fac1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Berchtesgaden, Germany",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Florence, Italy",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1623674587543-9c7564de99d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    title: "Giza, Egypt",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  },
  {
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0cmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Petra, Jordan",
    description: "Lovely travel destination",
    buttonLabel: "Visit",
    buttonLink: "https://..."
  }
]

const content = [
  {
      title: "First featurette heading. It’ll blow your mind.",
      description: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      picture: "./dubai1.jpg",
  },
  {
      title: "Second featurette heading. It’ll blow your mind.",
      description: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      picture: "./dubai2.jpg",
  },
  {
      title: "Third featurette heading. It’ll blow your mind.",
      description: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      picture: "./dubai3.jpg" ,
  }
]

function App() {
  return (
    <div>
     <NavBar logo="BTA"/>
      <Hero 
        title="Bootstrap Travel Agency"
        description="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        buttonLabel1="Book Now"
        buttonLabel2="Learn More"
      />

      <CardSection content={travelLocations}/>
      <MediaSection content={content}/>
      
    </div>
  );
}


/*
function App() {
  return (
    <div>
      <Button link="/home" width="100px">Home</Button> 
      <Button link="/about" width="100px">About</Button>
      <Button link="/contact" width="300px">Register</Button>

      <Card image="https://images.unsplash.com/photo-1628847022112-822475a94a78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
      title="Card101" description="Card description random" link="/home">CardButton101</Card>
      <Card image="https://images.unsplash.com/photo-1628711632211-50b28c0cce4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80" 
      title="Some Animal" description="a deer i guess" link="/animal">CardButton102</Card>
      <Card image="https://images.unsplash.com/photo-1628797279405-8cd6ffdbeb6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
      title="Room" description="A kitchen" link="/kitchen">CardButton103</Card>
    </div>
  );
}



/*function MyButton(props) {
  return (
    <button className={"btn " + props.color}>{ props.children }</button>
  )
}

function Button(props) {
  return (
    <button className={"btn" + props.width}>{ props.children }</button>
  )
}

function Button1(props) {
  return (
    <button style={ { width: props.width } } className="btn btn-primary">{props.children}</button>
  )
}

function App() {
  return (
    <div>
       <Button width=" btn-primary btn-lg">Large</Button>
       <Button width=" btn-secondary btn-sm">Small</Button>
       <Button width="btn-primary">Normal</Button>
      <br></br>
       <Button1 width="100px">Large</Button1>
       <Button1 width=" 150px">Small</Button1>
       <Button1 width="200px">Normal</Button1>
    </div>
  );
}*/

export default App;

