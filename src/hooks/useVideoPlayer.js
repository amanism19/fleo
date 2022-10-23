import { useState, useEffect, useCallback } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = useCallback(() => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  }, [playerState]);

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = useCallback(() => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  }, [playerState, videoElement]);

  const handleVideoProgress = useCallback(
    (event) => {
      const manualChange = Number(event.target.value);
      videoElement.current.currentTime =
        (videoElement.current.duration / 100) * manualChange;
      setPlayerState({
        ...playerState,
        progress: manualChange,
      });
    },
    [playerState, videoElement]
  );

  const handleVideoSpeed = useCallback(
    (event) => {
      const speed = Number(event.target.value);
      videoElement.current.playbackRate = speed;
      setPlayerState({
        ...playerState,
        speed,
      });
    },
    [playerState, videoElement]
  );

  const toggleMute = useCallback(() => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  }, [playerState]);

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;
