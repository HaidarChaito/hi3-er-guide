import { Buff } from '@/types/Buff';

type props = {
  buffs: Buff[];
};
export default function LoadoutBuffs({ buffs }: props) {
  return (
    <div className='mx-2'>
      <div className=''>Loadout buffs</div>
      <hr className='border-primary' />
      <div className='mx-2 overflow-x-auto'>
        <table className='table text-lg'>
          {/* head */}
          <thead className='text-lg text-primary-focus'>
            <tr className='border-secondary'>
              <th className='text-center'>Buff weight</th>
              <th className='text-center'> ✓ / X </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {buffs.map((buff, index) => {
              return (
                buff.selected != undefined && (
                  <tr key={index} className='border-secondary'>
                    <th className='text-center'>{buff.title}</th>
                    <td className='text-center'>{buff.selected}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
