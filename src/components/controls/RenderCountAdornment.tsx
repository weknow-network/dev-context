import * as React from 'react';
import {
    makeStyles, InputAdornment, Chip
} from "@material-ui/core";
import { useState, useEffect } from 'react';
import useDev from '../useDev';
export interface IRenderCountProps {
}

const useStyles = makeStyles(({
    chip: {
        background: "#555e",
        maxWidth: 23,
        maxHeight: 23,
        fontSize: 12
    }
}),
);

export default function RenderCountAdornment(props: IRenderCountProps) {
    const classes = useStyles(props);
    const [count, setCount] = useState<number>(0);
    const isDev = useDev();

    useEffect(() => {
        if (isDev) {
            return () => {
                setCount(count + 1);
            };
        }
    });

    if (!isDev) {
        return <></>
    }

    return (
        <InputAdornment position="end"><Chip label={count < 100 ? count : "99+"} className={classes.chip} /></InputAdornment>
    );
}
