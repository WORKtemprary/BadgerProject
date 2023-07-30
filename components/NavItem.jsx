import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export default function NavItem({
  href,
  title,
  onClick,
  className,
  overflowHidden,
  durationIn = 0.35,
  delay = 0.5, // Add default value for delay
  ease = 'sine.out',
  rotate = 0,
  scale = 1,
  x = 0,
  y = 0,
}) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const element = useRef();

  useEffect(() => {
    const el = element.current;
    el.style.transition = `transform 0.35s ${delay}s ${ease}, opacity 0.35s ${delay}s ${ease}`;
    el.style.transform = `translate(${x}, ${y}) rotate(${rotate}deg) scale(${scale})`;
    el.style.opacity = 0;

    // Wait for the initial render to apply the animation
    setTimeout(() => {
      el.style.transition = 'transform 0.35s, opacity 0.35s';
      el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      el.style.opacity = 1;
    }, 0);
  }, []);

  return (
    <div className={classNames({ 'u-overflow--hidden': overflowHidden })}>
      <span ref={element}>
        <div className="w-[140px] h-[53px] relative shadow">
          <div className="w-[140px] h-[53.23px] left-0 top-0 absolute rounded-2xl border border-red-800" />
          <div className="w-[140px] h-[53.23px] left-0 top-0 absolute bg-gradient-to-b from-orange-200 via-amber-300 to-orange-400 rounded-2xl border border-orange-500" />
          <div className="left-[25.65px] top-[15.29px] absolute text-center">
            <Link
              href={href}
              className={classNames({
                [className]: isActive,
              })}
              onClick={onClick}
            >
              <h2 className="text-red-800 text-xl font-semibold tracking-wider">
                {title}
              </h2>
            </Link>
          </div>
          <div className="w-[8.52px] h-[4.26px] left-[17.30px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
          <div className="w-[12.78px] h-[4.26px] left-[27.95px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
        </div>
      </span>
    </div>
  );
}
