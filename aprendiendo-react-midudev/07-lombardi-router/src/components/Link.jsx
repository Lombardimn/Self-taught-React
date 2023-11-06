import { BUTTON, EVENTS } from '../utils/consts'

export function navigate (href) {
  window.history.pushState({}, '', href)

  // crear un evento personalizado para avisar el cambio de url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // primary, middle, secondary
    const isMainEvent = event.button === BUTTON.PRIMARY

    // Click  + : Alt, Ctrl, Meta, Shift
    const isModifiedEvent = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey

    // verificamos el valor de target
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // navegar con SPA (Single Page Application)
    }
  }

  return <a href={to} onClick={handleClick} target={target} {...props} />
}
