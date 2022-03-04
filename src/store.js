import { atom } from 'recoil'

export const repos = atom({
    key: 'repos',
    default: [],
})

export const tabSelection = atom({
    key: 'tabSelection',
    default: 0,
})