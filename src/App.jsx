import { useState, useEffect } from 'react'

function App() {
  const [persons, setPersons] = useState ([]);
  const [number, setNumber] = useState(1);
  const [character, setCharacter] = useState({
  name: '',
  height: '',
  eye_color: '',
  gender: '',
  })

  const up = () => {
    setNumber((prev) => {
      if (prev === 82) return 82;
      return prev +1
    });
  }

  
  const down = () => {
    setNumber((prev) => {
      if (prev === 1) return 1;
      return prev - 1
    })
  }

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${number}`)
    .then((data) => data.json())
    .then((data) => {
      setCharacter(prev => ({
        ...prev,
        name: data.name,
        height: data.height,
        eye_color: data.eye_color,
        gender: data.gender,
      }))
    })
  }, [number]);



  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
    .then((data) => data.json())
    .then((data) => {
      setPersons(data.results)
      
    })
  }, []);


 


 
  
  return (
    <div>
      <div className="line">
        <span onClick={down} className='number'>-</span>
        <span className='number'>{number}</span>
        <span onClick={up} className='number'>+</span>{" "}
      </div>
      <div className='person-line'>
        <span className='label'>Name: </span> {" "}
        <span className=''>{character.name}</span>
      </div>
      <div className='person-line'>
        <span className='label'>Heigh: </span> {" "}
        <span className=''>{character.height}</span>
      </div>
      <div className='person-line'>
        <span className='label'>Eye color: </span> {" "}
        <span className=''>{character.eye_color}</span>
      </div>
      <div className='person-line'>
        <span className='label'>Gender: </span> {" "}
        <span className=''>{character.gender}</span>
      </div>
      <div className='allCount'>
        <p>All persons</p>
        <div className='personsCards'>
          {persons.map((person) => {
          console.log(person)
              return (
                <span className='persons' key={person.name}>
                  Name: {person.name}
                </span>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default App
