import * as React from 'react'
import { IconList } from "../lib/data-icon";


type props = {
    name: string, 
    color?: string,
    className?: string
}

const IconSvg = ({name, color, className}: props) => {
    return(
        <div>
            {
                IconList.map((icon, key) => (
                    icon.name == name && <img key={key} src={icon.svg} className={className} />
                ))
            }
        </div>
    );
}

export default IconSvg;