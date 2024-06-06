'use server'

import {cookies} from "next/headers";

export const setCookie = async (value: string) => {
    cookies().set('lang', value)
}

export const getCookie = async () => {
    return cookies().get('lang')
}