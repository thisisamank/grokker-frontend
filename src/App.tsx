import * as React from 'react';
import { CodeEditor } from './Components/CodeEditor';
import { HBreakLine } from './Components/HBreakLine';
import './Header/Header';
import { Header } from './Header/Header';
import './index.css';


export default function MyApp() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Header />
      <HBreakLine />
      <p className='font-semi-bold text-left'>Sample Data</p>
      <CodeEditor />
    </div>
  );
}

