import React from 'react';
import PropTypes from 'prop-types';
import './drumKit.css'


// const playAudio = () => {
//   const audio= document.querySelector(`audio[data-key="${"65".keyCode}"]`);
//   audio.play();
// }
// const keys = document.querySelector('.key[data-key]=66');
//   console.log(keys);
const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; //stop from running all together
  audio.currentTime = 0; // rewind the audio
  audio.play()
  .then(elem => console.log('adios'))
  .catch(elem => console.log(elem));
  key.classList.add('playing');
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', () => {
    if (key.className !== 'key playing') return;
    key.classList.remove('playing');
  }));
}
window.addEventListener('keydown', playAudio);

const DrumKit = () => {
	return (
	<>
	<div className="keys">
    <div data-key="65" className="key">
      <kbd>A</kbd>
      <span className="sound">clap</span>
    </div>
    <div data-key="83" className="key">
      <kbd>S</kbd>
      <span className="sound">hihat</span>
    </div>
    <div data-key="68" className="key">
      <kbd>D</kbd>
      <span className="sound">kick</span>
    </div>
    <div data-key="70" className="key">
      <kbd>F</kbd>
      <span className="sound">openhat</span>
    </div>
    <div data-key="71" className="key">
      <kbd>G</kbd>
      <span className="sound">boom</span>
    </div>
    <div data-key="72" className="key">
      <kbd>H</kbd>
      <span className="sound">ride</span>
    </div>
    <div data-key="74" className="key">
      <kbd>J</kbd>
      <span className="sound">snare</span>
    </div>
    <div data-key="75" className="key">
      <kbd>K</kbd>
      <span className="sound">tom</span>
    </div>
    <div data-key="76" className="key">
      <kbd>L</kbd>
      <span className="sound">tink</span>
    </div>
  </div>
 
  <audio data-key="65"  src="http://bringthenoise.weebly.com/uploads/2/1/6/7/2167979/808_clap.wav"></audio>
  <audio data-key="83" src="http://orteil.dashnet.org/cookieclicker/snd/squish4.mp3"></audio>
  <audio data-key="68" src="http://www.mario-museum.net/sons/smb_coup-de-pied.wav"></audio>
  <audio data-key="70" src="http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/27-open%20hi%20hat.wav"></audio>
  <audio data-key="71" src="http://www.coastcomp.com/av/fltline2/sounds/sboom.wav"></audio>
  <audio data-key="72" src="http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Jazz%20Rides%20148-12426-Free-Loops.com.mp3"></audio>
  <audio data-key="74" src="http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hip%20Hop%20Snare%20Drum-20565-Free-Loops.com.mp3"></audio>
  <audio data-key="75" src="http://www.footdrumplus.ca/uploads/3/4/8/6/34866267/s2-28.wav"></audio>
  <audio data-key="76" src="http://tteacher.net/Flash/sound/cling_1.wav"></audio> 

	</>
	)
}


export default DrumKit;
DrumKit.propTypes={
e: PropTypes.string
};
