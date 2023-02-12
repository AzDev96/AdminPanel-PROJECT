import {lazy} from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДАЛЕТЬ!! МЫ ЭТО ДЛЯ КУРСА ДЕЛАЕМ
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))