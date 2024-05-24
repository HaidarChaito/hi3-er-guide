import { valks } from '@/data/visibleValks';
import Image from 'next/image';

export default function Page({ params }: { params: { valkLabel: string; buildLabel: string } }) {
  let valk;
  let build;
  let stages = ['Start', 'Second shop', 'Last shop'];
  const decodedString = decodeURIComponent(params.valkLabel);
  for (let index = 0; index < valks.length; index++) {
    if (valks.at(index)?.label.replaceAll(' ', '_') == decodedString) {
      valk = valks.at(index);
    }
  }
  const decodedBuildString = decodeURIComponent(params.buildLabel);
  if (valk?.build != undefined)
    for (let index = 0; index < valk!.build.length; index++) {
      if (valk?.build.at(index)?.label.replaceAll(' ', '_') == decodedBuildString) {
        build = valk.build.at(index);
      }
    }
  return (
    <div className='mx-2 mt-2'>
      <div className='text-center text-primary'>
        {valk?.label} | {build?.label}
      </div>

      <div className='grid gap-2 md:grid-cols-3 '>
        <div className='my-auto'>
          {build?.notes != undefined && (
            <div className='overflow-x-auto'>
              <table className='table border-separate border-[1px] border-primary'>
                <tbody>
                  <tr className='rounded-lg bg-base-200'>
                    <td className='rounded-lg'>{build.notes}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {build?.extra_notes != undefined && (
            <div className='overflow-x-auto'>
              <table className='table border-separate border-[1px] border-primary'>
                <tbody>
                  <tr className='rounded-lg bg-base-200'>
                    {build.extra_notes.map((note, index) => (
                      <td key={`note_${index}`} className='rounded-lg'>
                        {note.text}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className='my-auto'>
          {build?.emblems != undefined && (
            <div className='mt-2 overflow-x-auto'>
              <table className='table border-separate border-[1px] border-primary'>
                <tbody>
                  {build?.emblems?.map((emblemArr, index) => (
                    <tr key={index} className='rounded-lg bg-base-200'>
                      <th className='rounded-lg'>{stages.at(index)}</th>
                      {emblemArr.map((emblem, index) => (
                        <td key={index} className='rounded-lg'>
                          <Image alt='Emblem' width={48} height={48} src={`/${emblem}`} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  {build?.supports?.map((supportArr, index) => (
                    <tr key={`supportStage_${index}`} className='rounded-lg bg-base-200'>
                      <th className='rounded-lg'>{stages.at(index)}</th>
                      {supportArr.map((support, index) => (
                        <td key={`support_${index}`} className='rounded-lg'>
                          <Image alt='Emblem' width={48} height={48} src={`/${support}`} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {build?.gear != undefined && build.gear.length > 0 && (
          <div className='my-auto'>
            {build?.gear != undefined && (
              <div className='mt-2 overflow-x-auto'>
                <table className='table border-separate border-[1px] border-primary'>
                  <tbody>
                    {build?.gear?.map((gear, index) => (
                      <tr key={`gear_${index}`} className='rounded-lg bg-base-200'>
                        <td className='rounded-lg'>{gear.gearInfo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
      {build?.signets != undefined && (
        <div className='mt-2 overflow-x-auto'>
          <table className='table border-separate border-[1px] border-primary'>
            <tbody>
              {build?.signets?.map((signetArr, index) => (
                <tr key={`signet_${index}`}>
                  <th className='rounded-lg bg-base-200 text-primary'>
                    {signetArr.at(0)?.family ?? 'Ego'}
                  </th>
                  {signetArr.map((signet, index) => (
                    <td key={`signet_info_${index}`} className='rounded-lg'>
                      {signet.label}
                      {signet.priority && <div className='text-red-400'>{signet.priority}</div>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
