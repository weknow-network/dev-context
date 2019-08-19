// credit: https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/master/src/use-observable.ts

import { useContext } from 'react'

import Context from './DevContext'

export default function useDev(): boolean {
    const context: boolean = useContext<boolean>(Context)

    return context;
}