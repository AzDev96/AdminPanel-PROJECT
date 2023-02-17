import { classNames } from "shared/lib/classNames/classNames";
import  "./PageLoader.scss";
interface IPageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: IPageLoaderProps) {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <div className="loadingio-eclipse">
        <div className="ldio-rpinwye8j0b">
          <div></div>
        </div>
      </div>
    </div>
  );
}
