type props = {
  onChange: (() => void) | undefined;
  checked: boolean | undefined;
  swapOn: string;
  swapOff: string;
};

export default function Toggle({ onChange, checked, swapOn, swapOff }: props) {
  return (
    <label className='swap swap-flip h-full border-b-2 border-b-primary'>
      <input onChange={onChange} checked={checked} type='checkbox' />
      <div className='swap-on '>{swapOn}</div>
      <div className='swap-off'>{swapOff}</div>
    </label>
  );
}
