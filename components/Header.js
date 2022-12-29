import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {style} from '../styles/styling'
import logo from '../assets/logoSymbol.png'
import {AiOutlineSearch} from 'react-icons/ai'
import{CgProfile} from 'react-icons/cg'
import{MdOutlineAccountBalanceWallet} from 'react-icons/md'

const Header = () => {
  return (
    <div className={style.wrapper}>
        <Link href="/">
        <div className={style.logoContainer}>
          <Image src={logo} height={40} width={40}/>
          <div className={style.logoText}>ProNef</div>
        </div>
        </Link>
       <div className={style.searchBar}>
         <div className={style.searchIcon}>
            <AiOutlineSearch/>
         </div>
         <input className={style.searchInput} 
         placeholder='Search items, collections and Account'/>
       </div>
       <div className={style.headerItems}>
        <Link href='./collections/0x6Bc0E4783372E64b062DE45d07a50c61A664B7fe'>
        <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerItem}>Create</div>
        <div className={style.headerIcon}>
            <CgProfile/>
        </div>
        <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet/>
        </div>
       </div>
    </div>
  )
}

export default Header