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
      <div className='absolute z-50 mx-auto flex items-center justify-between px-15'>
        <div className='max-w-[50%]'>
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
