import { EVENTS, BUTTON } from "./consts";


export  function navigate (href) {
  window, history.pushState({}, "", href);

  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link ({target, to, ...props}) {
    const handleClick = (event) => {

        const isMainEvent = event.button === BUTTON.primary
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableevent = target === undefined || target === '_self'

        if (isMainEvent && isManageableevent && !isModifiedEvent) {
            event.preventDefault();
            navigate(to)
        }


        navigate(to)
    }

    return  <a onClick={handleClick} href={to} target={target} {...props} />
}