import { useState } from 'react';
import styles from '@/styles/modules/MobileNavigation.module.scss';
import NavItem from './NavItem';
import classNames from 'classnames';

export default function MobileNavigation({ isOpen, toggle }) {
  return (
    <>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      {isOpen && (
        <nav
          className={classNames(styles['c-mobileNav'], {
            [styles['is-open']]: isOpen,
          })}
        >
          <div className={styles['c-mobileNav__scroll']}>
            <div className={styles['c-mobileNav__container']}>
              <div className={styles['c-mobileNav__primary']}>
                <div className={styles['c-mobileNav__primary--list']}>
                  <ul>
                    <li>
                      <NavItem
                        href="/gsap"
                        title="HOME"
                        className={styles['is-current-page']}
                        overflowHidden
                        delay={0.2}
                        ease="slow"
                        y="100%"
                        rotate={7}
                      />
                    </li>
                    {/* More NavItems */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

function Hamburger({ isOpen, toggle }) {
  return (
    <button
      className={classNames(styles['m-hamburger'], {
        [styles['is-nav-active']]: isOpen,
      })}
      type="button"
      aria-label="Toggle menu"
      onClick={toggle}
    >
      <div className={styles['m-hamburger__lines']}>
        <span></span>
      </div>
    </button>
  );
}
