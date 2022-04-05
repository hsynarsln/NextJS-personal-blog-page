import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {/* Link --> navigate için kullanıyoruz. İçine sadece text alır. Eğer component koymak istiyorsak, componenti a taginin içine alıp daha sonra Link taginin içine o şekilde koymak gerekir */}
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
