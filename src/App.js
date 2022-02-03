/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSound, setCurrentSound] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentKey, setCurrentKey] = useState(null);
  const [active, setActive] = useState(false);
  const drumKit = [
    {
      name: 'Heater1',
      key: 'Q',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      name: 'Heater2',
      key: 'W',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      name: 'Heater3',
      key: 'E',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      name: 'Heater4',
      key: 'A',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      name: 'Clap',
      key: 'S',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      name: 'OpenHH',
      key: 'D',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      name: 'KicknHat',
      key: 'Z',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      name: 'Kick',
      key: 'X',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      name: 'Cev',
      key: 'C',
      file: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];
  function playDrumPad(e, index) {
    const key = e.key.toUpperCase();
    setCurrentKey(key);
    drumKit.map((kit) => {
      if (key === kit.key) {
        setCurrentName(kit.name);
      }
    });
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    if (currentSound) {
      currentSound.pause();
    }
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
    setCurrentSound(sound);
    sound.play();
  }

  function handleClick(key) {
    drumKit.map((kit) => {
      if (kit.key === key) {
        const audio = document.getElementById(key);
        audio.play();
        setCurrentName(kit.name);
      }
    });
  }
  return (
    <div id="drum-machine" className="App">
      <div id="pad">
        {drumKit.map((kit, index) => {
          return (
            <div>
              <div
                onKeyDown={(e) => playDrumPad(e, index)}
                onClick={() => handleClick(kit.key)}
                tabIndex={0}
                className="drum-pad"
                style={
                  active && currentKey === kit.key
                    ? { backgroundColor: 'white' }
                    : {}
                }
                id={kit.name}
                key={kit.name}
              >
                <audio id={kit.key} className="clip" src={kit.file}></audio>
                {kit.key}
              </div>
            </div>
          );
        })}
      </div>
      <p id="display">{currentName}</p>
    </div>
  );
}

export default App;
