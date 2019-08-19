import * as React from 'react';
import {
    Badge
} from "@material-ui/core";
import { useState, useEffect } from 'react';
import color from "color";
import useDev from '../useDev';
import { makeStyles } from '@material-ui/styles';

export interface IRenderCountProps {
    children: JSX.Element;
}
const useStyles = makeStyles({
    badge: {
        backgroundColor: color("#333")
            .alpha(0.7)
            .string(),
        color: color("#fff")
            .alpha(0.5)
            .string(),
        marginLeft: 4,
    }
});

export default function RenderCountBadge(props: IRenderCountProps) {
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
        return props.children;
    }
    return (
        <Badge badgeContent={count} classes={{ badge: classes.badge }}>
            {props.children}
        </Badge >
    );
}
