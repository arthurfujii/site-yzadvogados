'use client';
import icon_menu from '../../../../public/images/icon_menu.svg';
import icon_close from '../../../../public/images/icon_close.svg';
import ExportedImage from 'next-image-export-optimizer';
import React, { useState } from 'react';
import { Logo } from '../Logo';
import NavMenu from '../NavMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const resetMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className='w-full pt-10 sm:hidden'>
      <div className='absolute left-1/2 z-50 flex w-full -translate-x-1/2 flex-row items-center justify-between p-5'>
        <div className='flex max-w-[50%] items-center justify-center sm:block sm:h-full sm:w-2/7'>
          <Logo />
        </div>
        {isOpen ? (
          <ExportedImage
            src={icon_close}
            alt='Close icon'
            width={32}
            placeholder='empty'
            onClick={toggleMenu}
          />
        ) : (
          <ExportedImage
            src={icon_menu}
            alt='Menu icon'
            width={32}
            placeholder='empty'
            onClick={toggleMenu}
          />
        )}
      </div>
      <div className='z-0'>
        <NavMenu active={isOpen} resetMenu={resetMenu} />
      </div>
    </header>
  );
};

export default Header;
