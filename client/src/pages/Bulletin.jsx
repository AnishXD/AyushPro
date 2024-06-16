import { News } from '../components'
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Bulletin = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
      <News country="in" pageSize={20} category="health" setProgress={setProgress} />

    </div>
  )
}

export default Bulletin