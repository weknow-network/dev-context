import * as React from 'react';
import {
    Fab, makeStyles
} from "@material-ui/core";
import { useState, useEffect } from 'react';
import useDev from '../useDev';

export interface IRenderCountProps {
}

const useStyles = makeStyles({
    fab: {
        alignSelf: "center",
        margin: 2,
        fontSize: 12,
        width: 35,
        height: 35,
        zIndex: -1
    },
});

export default function RenderCount(props: IRenderCountProps) {
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
        // <div className={classes.circle}>
        //     {count}
        // </div>
        <Fab color="secondary" variant="round" disabled size="small" aria-label={`${count}`} className={classes.fab}>
            {count}
        </Fab>
    );
}
