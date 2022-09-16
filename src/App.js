import './main.scss';

function App() {
  return (
    
      <div className="wrapper">
        <Card
          img="https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          title="Michael K. Jolliff"
          description="PhD in Psychology"
          Experience= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          speciality="Type-1"
        />
  
        <Card
          img="https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          title="Amelia Hart"
          description="MS in Psychology"
          Experience= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          speciality="Type-2"
        />
        <Card
          img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          title="Amy M. Espino"
          description="BS in Psychology"
          Experience= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          speciality="Type-3"
        />
        <Card
          img="https://images.unsplash.com/photo-1632142365811-3a9ae872f33d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
          title="Harshit Singh"
          description="PhD in Psychology"
          Experience= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          speciality="Type-4"
        />
      </div>
    
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h5 className="card__exp">{props.Experience}</h5>
        <h4 className="card__sp">{props.speciality}</h4>
        <button className="card__btn">Book Appointment</button>
      </div>
    </div>
  );
}




/*

<Card
      img="https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
      title="Tie Up Boots"
      description="Fall Favorite • Boots"
      speciality="Type-4"
    />
    
    


*/



export default App;

