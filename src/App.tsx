// Portfolio site
import React from 'react';
import { useDimensions } from './logic/hooks';
import { TypeAnimation } from 'react-type-animation';

const start_img = Math.floor(Math.random() * 5) + 1;

const bullet = () => <span className='symbol' style={{fontWeight: 'bold'}}>﹡</span>;

function App() {
  const [face, setFace] = React.useState<number>(start_img);
  const dimensions = useDimensions(0);
  const img_path = process.env.PUBLIC_URL + '/img_face/' + face.toString() + '.jpg';
  return (
    <div className="App">
      {/* <img
                src={img_path}
                alt="mah big face"
                height={dimensions.height} width={dimensions.width}
            /> */}
      <div className="info-container">
        <p className='name'>David Haas</p>
        <p className='subtitle'>
          Madison, WI <span className='symbol'>⊛</span>{' '}
          <TypeAnimation
            sequence={[
              'Machine Learning Engineer',
              5000,
              'Recreational Climber',
              1000,
              'Games Enthusiast',
              1000,
              'Bad Comedian',
              750,
              'Dabbling Musician',
              1000,
              'Machine Learning Engineer',
            ]}
            repeat={0}
            speed={20}
            omitDeletionAnimation={true}
          />
        </p>
        <p className='subtitle'>
          <a href="https://github.com/davidhaas6">Resume [*]</a> |{' '}
          <a href="https://github.com/davidhaas6">Github</a> |{' '}
          <a href="https://www.linkedin.com/in/davidhaas6/">LinkedIn</a>
        </p>
        {/* <hr/> */}
        <p className='divider'>- - - - - - - - - - - - - - - - - - - - - - - -</p>
        Project Spotlight:
        <p className='project-link'>{bullet()}<a href="https://colors.davidhaas.me">Spectrimo: AI Color Generation</a></p>
        <p className='project-link'>{bullet()}<a href="https://bazamjam.com">Bazamjam: Real-time Music Analysis</a></p>
        <p className='project-link'>{bullet()}<a href="https://davidhaas6.github.io/coherence/">Coherence: Pop-physics Video Game</a></p>
        <p className='project-link'><a href="https://github.com/davidhaas6?tab=repositories&q=&type=&language=&sort=">Everything else...</a></p>
      </div>
    </div>
  );
}

export default App;
