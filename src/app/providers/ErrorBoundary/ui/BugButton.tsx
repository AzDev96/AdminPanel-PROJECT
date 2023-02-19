import { classNames } from "shared/lib/classNames/classNames";
import cls from './BugButton.module.scss';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
interface FILESProps {
    className?: string;
}
// компонент для тестирование
export function BugButton({ className }: FILESProps) {
    const [error, setError] = useState(false)
    const onTrow = () => setError(true)
    useEffect (() => {
        if(error) {
            throw new Error()
        }
    }, [error])
  return (
    <Button onClick={onTrow}>
        Trow errror
    </Button>
  );
}
