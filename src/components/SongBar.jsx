import React from 'react';
import PlayPause from './PlayPause';

const SongBar = ({name, img, songid, album, subtitle, songSource, i, activeSong,artistId, handlePlayPauseClick ,isplaying , artist}) => (
  <div className={`w-full flex flex-row items-center ${artist===true?"hover:bg-[#6649c6]":"hover:bg-[#4c426e]"}  ${artist===true && activeSong === name ? 'bg-[#6649c6]' : ''} ${artist === true && activeSong !== name?'bg-[#17035a]':""} " py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <audio id={songid} src={songSource}></audio>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={img}
        alt={"rahul"}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
       
            <p className="text-sm font-bold text-white">
              {name}
            </p>
        <p className="text-base text-gray-300 mt-1">
          {album}
        </p>
      </div>
    </div>
    
      (<div onClick={()=>handlePlayPauseClick(i,name,img,subtitle,songid)}>
          <PlayPause
            isplaying={isplaying}
            activeSong={activeSong}
            data={name}
          />

        </div>

  </div>
);

export default SongBar;