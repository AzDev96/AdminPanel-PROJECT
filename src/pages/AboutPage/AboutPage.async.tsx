import {lazy} from 'react'
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДАЛЕТЬ!! МЫ ЭТО ДЛЯ КУРСА ДЕЛАЕМ
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))