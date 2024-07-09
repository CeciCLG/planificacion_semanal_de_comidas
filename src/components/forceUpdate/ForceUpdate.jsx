import { useState } from 'react';


function UseForceUpdate() {

    const [value, setValue] = useState(0);

    return () => setValue(value + 1);

}

export default UseForceUpdate