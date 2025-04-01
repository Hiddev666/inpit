'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from "lucide-react"
import { Button } from '@material-tailwind/react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => setIsPlaying(false));
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='fixed z-200 bottom-7 right-7'>
            <audio ref={audioRef} src="/audio/septi-nopri.mp3" preload="auto" autoPlay/>
            <Button onClick={togglePlay} size="icon" variant="outline" className='bg-[#566E51] p-2'>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
        </div>
    )
}

export default AudioPlayer
