import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      cities: []
    }
  }
  componentDidMount(){

    const apiUrl = 'http://localhost:3001/api/home';
    fetch(apiUrl)
    .then((resp) => {
      console.log('componentDidMount fetch().then() resp', resp);
      // console.log('componentDidMount fetch().then() rest.json', resp.json()); // retourne erreur si 2 demandes de .json(), si pas de return pour eviter ce souci le montage est en pending
      return resp.json();
    }
    ,(err) =>{
      console.log('componentDidMount fetch().then() err', err);
    })
    .then((json) => {
      console.log('componentDidMount fetch().then().then() json', json);
      console.log('componentDidMount fetch().then().then() json.cities', json.cities);
      // console.log('componentDidMount fetch().then().then() json.success', json.success);
      const cities = json.cities;

      this.setState({
        cities
      });
    });
    
  }

  render(){
    
    console.log('app#render this.state.cities', this.state.cities);
    
    return(
      <div>
        <h1>Hello Trippy API</h1>
        {this.state.cities.map((city) => {
          return(
            <div>
              <img src={'http://localhost:3001' + city.source} />
              <p>{city.name}</p>
            </div>
          );
        })}
      </div>
    );
    
  }
}

export default App;
