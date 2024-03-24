import * as React from 'react';
import { CodeEditor } from './Components/CodeEditor';
import { HBreakLine } from './Components/HBreakLine';
import { Subtitle } from './Components/Subtitle';
import './Header/Header';
import { Header } from './Header/Header';
import './index.css';


export default function MyApp() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Header />
      <HBreakLine />
      <div className='w-[750px]'>
        <Subtitle text='Sample Data' />
      </div>
      <CodeEditor
        value='{"name": "John Doe", "age": 30, "city": "New York"}'
        height='200px'
        onChange={(value: string) => console.log(value)
        } />
      <HBreakLine />
      <div className='w-[750px]'>
        <Subtitle text='Grok Pattern' />
      </div>
      <CodeEditor
        value='{"name": "John Doe", "age": 30, "city": "New York"}'
        height='150px'
        onChange={(value: string) => console.log(value)
        } />
      <HBreakLine />
      <div className='w-[750px]'>
        <Subtitle text='Structured Data (Output)' />
      </div>
      <CodeEditor
        value='{"name": "John Doe", "age": 30, "city": "New York"}'
        height='200px'
        onChange={(value: string) => console.log(value)
        } />

    </div>
  );
}

