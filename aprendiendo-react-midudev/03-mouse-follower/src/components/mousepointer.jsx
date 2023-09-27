import { useEffect, useState } from "react"

export const FollowMouse = () => {
	const [enabled, setEnabled] = useState(false)
	const [position, setPosition] = useState({x:0, y:0})

	//pointer move
	useEffect(() => { 
		console.log('effect ', {enabled})

		const handleMove = (event) => {
			const { clientX, clientY} = event
			console.log('function', {clientX, clientY})
			setPosition({x: clientX, y: clientY})
		}

		// llamamos al evento del mouse
		if (enabled){
			window.addEventListener('pointermove', handleMove)
		}
		
		// --> el cleanup se ejecuta cunado desmontamos el comopnente App
		// --> o cuando cambian las dependencias (limpiar evento)
		return () => {
			console.log('cleanup')
			window.removeEventListener('pointermove', handleMove)
		}
	}, [enabled])

	// [] -> solo se ejecuta una vez cuando se monta el componente
    // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
    // undefined -> se ejecuta cada vez que se renderiza el componente

	return (
		<>
			<div style={{
				position: 'absolute',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				border: '1px solid #fff',
				borderRadius: '50%',
				opacity: 0.8,
				pointerEvents: 'none',
				left: -25,
				top: -25,
				width: 50,
				height: 50,
				transform: `translate(${position.x}px, ${position.y}px)`
			}}
			/>
			<h3>Proyecto 03</h3>
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? 'Desactivar' : 'Activar'} seguir Puntero
			</button>
		</>
	)
}