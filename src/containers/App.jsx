import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import './App.css';
import Scroll from '../components/Scroll.jsx';

const App = () =>{
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[]);

    const onSearchChange = (event) =>{
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    console.log("HOOKS!!!");
    
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