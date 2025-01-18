import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import './App.css';
import Scroll from '../components/Scroll.jsx';

const App = () =>{
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     } 
    // }
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    let i = 1;
    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
        console.log("useEffect ran " + (i++));
    },[]);
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));
    // }

    const onSearchChange = (event) =>{
        setSearchfield(event.target.value);
    }

    // const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log(robots, searchfield);
    return !robots.length ?
        <h1 className='tc'>Loading</h1> :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots = { filteredRobots }/>
            </Scroll>
        </div>
    );           
}

export default App;