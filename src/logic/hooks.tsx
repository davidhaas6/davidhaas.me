import React from 'react';

//////
// Dimension listener
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
/////
function debounce(fn: () => void, period_ms: number) {
    let timer: any;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn();
        }, period_ms);
    };
}

// Listen to the dimensions of a window via a hook.
// the period parameter limits how often the dimension state can be updated
export function useDimensions(refresh_period_ms: number) {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    React.useEffect(() => {
        // Don't refresh the state toooo often
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, refresh_period_ms);

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    },[refresh_period_ms]);
    
    return dimensions;
}