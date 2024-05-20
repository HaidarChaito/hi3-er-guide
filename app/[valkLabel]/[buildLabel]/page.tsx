import { valks } from '@/data/visibleValks';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { headers } from 'next/headers';

type Props = {
  params: { valkLabel: string; buildLabel: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  let valk;
  const decodedString = decodeURIComponent(params.valkLabel);
  for (let index = 0; index < valks.length; index++) {
    if (valks.at(index)?.label.replaceAll(' ', '_') == decodedString) {
      valk = valks.at(index);
    }
  }
  return {
    title: 'Hi3 ER guide',
    description: 'for feedback or issues message syblue081 on Discord',
    applicationName: 'Hi3er',
    authors: [{ name: 'HaidarChaitoMena', url: 'https://github.com/HaidarChaitoMena' }],
    creator: 'HaidarChaitoMena',
    publisher: 'HaidarChaitoMena',
    openGraph: {
      title: 'Hi3er',
      description:
        'for feedback or issues message syblue081 on Discord, Special thanks to Kithicide.',
      url: 'https://hi3er.tech',
      siteName: 'Hi3er',
      images: [
        {
          url:
            valk?.image != undefined
              ? `${domain}/_next/image?url=${valk?.image}.png&w=640&q=60`
              : 'https://images-ext-2.discordapp.net/external/fXsDf50jW_ShXu1Vf7OTbqW3jslN3ZqoTp_nijtD11o/https/cdn.discordapp.com/emojis/1134456907134926931.gif',
          width: 100,
          height: 100,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function Page({ params }: { params: { valkLabel: string; buildLabel: string } }) {
  let valk;
  let build;
  let stages = ['Start', 'Second shop', 'Floor 16'];
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

      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 '>
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
        </div>
        <div className='my-auto'>
          {build?.emblems != undefined && (
            <div className='mt-2 overflow-x-auto'>
              <table className='table border-separate border-[1px] border-primary'>
                <tbody>
                  {build?.emblems?.map((emblemArr, index) => (
                    <tr className='rounded-lg bg-base-200'>
                      <th className='rounded-lg'>{stages.at(index)}</th>
                      {emblemArr.map((emblem, index) => (
                        <td className='rounded-lg'>
                          <Image alt='Emblem' width={48} height={48} src={`/${emblem}`} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className='my-auto'>
          {build?.gear != undefined && (
            <div className='mt-2 overflow-x-auto'>
              <table className='table border-separate border-[1px] border-primary'>
                <tbody>
                  {build?.gear?.map((gear, index) => (
                    <tr className='rounded-lg bg-base-200'>
                      <td className='rounded-lg'>{gear.gearInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {build?.signets != undefined && (
        <div className='mt-2 overflow-x-auto'>
          <table className='table border-separate border-[1px] border-primary'>
            <tbody>
              {build?.signets?.map((signetArr, index) => (
                <tr>
                  <th className='rounded-lg bg-base-200 text-primary'>
                    {signetArr.at(0)?.family ?? 'Ego'}
                  </th>
                  {signetArr.map((signet, index) => (
                    <td className='rounded-lg'>
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
