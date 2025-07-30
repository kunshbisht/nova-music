import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactComponent as Logo } from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Shelf } from './Song';
import RandomSongShelf from './RandomSongShelf';
import { onDrop } from './drag';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const placeholderImage = "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"

const SearchBar = () => <div className='flex gap-4 justify-self-center bg-gray-800 py-2 px-5 rounded-xl'>
  <i className="bi bi-search"></i>
  <input className='border-none bg-transparent outline-none w-[400px]' placeholder="What do you want to listen to?" onDrop={e => e.preventDefault()}/>
</div>

root.render(
  <>
    <header className='flex bg-gray-900 border-b-[1px] p-4 justify-between items-center'>
      <div id="logo" className='flex items-center text-2xl font-bold gap-2'>
        <Logo fill='white' height='1.5em' className='animate-spin [animation-duration:3s]'></Logo>
        <h1 className='whitespace-nowrap'>Nova Music</h1>
      </div>
      <SearchBar></SearchBar>
      <div>
        <img src={placeholderImage} alt="" className="rounded-full h-[30px] aspect-square" />
      </div>
    </header>
    <main className='flex-1 flex overflow-hidden'>
      <aside className='flex flex-col gap-4 bg-gray-900 border-r-[1px] text-2xl p-4' onDragOver={e => e.preventDefault()} onDrop={onDrop}>
        <i className="bi bi-plus-lg hover:bg-white/30 inline-block p-4 h-16 text-center aspect-square rounded-md"></i>
      </aside>
      <section className='flex-1 flex flex-col bg-gray-900 p-8 overflow-auto gap-6'>
        <RandomSongShelf />
        <RandomSongShelf />
        <RandomSongShelf />
        <RandomSongShelf />
      </section>
    </main>
  </>
);