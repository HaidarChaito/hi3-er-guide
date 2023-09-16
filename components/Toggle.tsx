import { ReactNode } from 'react';

type props = {
  onChange: (() => void) | undefined;
  checked?: boolean | undefined;
  swapOn?: string;
  swapOff?: string;
  children?: ReactNode[];
};

export default function Toggle({ onChange, checked, swapOn, swapOff, children }: props) {
  return (
    <label className='swap swap-flip h-full border-b-2 border-b-primary'>
      <input onChange={onChange} checked={checked} type='checkbox' />
      {children === undefined && (
        <>
          <div className='swap-on '>{swapOn}</div>
          <div className='swap-off'>{swapOff}</div>
        </>
      )}
      {children}
    </label>
  );
}
