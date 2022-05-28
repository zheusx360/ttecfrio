import React, { useState,useEffect } from 'react'
import Lottie from 'react-lottie';
import loading from '../../../public/LottieAnims/loading.json'
import formulario from '../../../public/LottieAnims/formulario.json'

export default function Loading({ width = '30%' || 30, height = '30%' || 30, texto = '', imagem = 'loading', loop = true }) {

  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })

  const imageIcon = () => {
    switch (imagem) {
      case 'loading':
        return loading
      case 'formulario':
        return formulario
      default: return loading
    }
  }

  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: imageIcon(),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Lottie options={defaultOptions}
        height={height}
        width={width}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
        />
        {texto !== '' && <span>{texto}</span>}

    </div>
  )

}
