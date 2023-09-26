import { Build } from '@/types/Build';
import { LuSwords } from 'react-icons/lu';
import Rank from './Rank';
import { Valkery } from '@/types/Valkery';
import { switchColor } from '@/helpers/functions';
import Image from 'next/image';
import GifPlayer from '../shared/GifPlayer';
import Gear from './Gear';

type props = {
  build: Build;
  valkery: Valkery;
};

export default function Build({ build, valkery }: props) {
  return (
    <>
      <div id={build.label} className='mx-2 my-1 flex-1'>
        <div className='mx-auto '>
          <Rank tier={build.tier ?? 1} />
          <div className='font-bold '>
            <LuSwords className='mr-1 inline-block' />
            <span className='inline-block'>{build.label}</span>
            <LuSwords className='ml-1 inline-block' />
          </div>
          <hr className={`border-b border-${switchColor(valkery.type)}`} />
          {/* Notes */}
          {build.notes != undefined && (
            <section className='my-2 w-full'>
              <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                Notes:
              </div>
              <div className='w-fit'>{build.notes}</div>
            </section>
          )}
          {/* Gear */}
          {build.gear != undefined && (
            <section className='my-2 w-full'>
              <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                Gear options:
              </div>
              {build.gear.map((gear, i) => {
                return <Gear key={i} gear={gear} />;
              })}
            </section>
          )}
          {/* Support */}
          {build.supports != undefined && (
            <section className='my-2 w-full'>
              <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                Supports:
              </div>
              <div className='flex'>
                <span className={`my-auto w-14 border-b border-b-primary`}>Early:</span>
                {build.supports[0].map((support, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${support}`}
                          alt={support}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div className='flex'>
                <span className={`my-auto w-14 border-b border-b-primary`}>Mid:</span>
                {build.supports[1].map((support, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${support}`}
                          alt={support}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div className='flex '>
                <span className={`my-auto w-14 border-b border-b-primary`}>Late:</span>
                {build.supports[2].map((support, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${support}`}
                          alt={support}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
          )}
          {/* Emblem */}
          {build.emblems != undefined && (
            <section className='my-2 w-full'>
              <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                Emblems:
              </div>
              <div className='flex'>
                <span className={`my-auto w-14 border-b border-b-primary`}>Early:</span>
                {build.emblems[0].map((emblem, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${emblem}`}
                          alt={emblem}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div className='flex'>
                <span className={`my-auto w-14 border-b border-b-primary`}>Mid:</span>
                {build.emblems[1].map((emblem, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${emblem}`}
                          alt={emblem}
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div className='flex'>
                <span className={`my-auto w-14 border-b border-b-primary`}>Late:</span>
                {build.emblems[2].map((emblem, i) => {
                  return (
                    <>
                      {i % 2 == 0 && i !== 0 && <div className='divider my-auto h-full '>OR</div>}
                      <div key={i} className='inline-block object-fill'>
                        <Image
                          className='w-[18] rounded-t-3xl p-2 sm:w-24'
                          width={75}
                          height={75}
                          src={`/${emblem}`}
                          alt={emblem}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
          )}
          {/* Signets */}
          <section className='my-2 w-full'>
            <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
              Signets:
            </div>
            {build.signets.map((signetClass, i) => (
              <div key={i} className='mb-4'>
                {i == build.signets.length - 1 && (
                  <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                    Optional signets from the Shop:
                  </div>
                )}
                {i != build.signets.length - 1 && (
                  <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
                    {signetClass[0].family}
                  </div>
                )}
                {signetClass.map((signet, j) => (
                  <div key={j} className='flex leading-7'>
                    <div>{signet.label}</div>
                    {signet.shortDescription && (
                      <div className={`italic text-primary`}>({signet.shortDescription})</div>
                    )}
                    {signet.priority != undefined && (
                      <div className={`text-${switchColor(valkery.type)} italic`}>
                        ({signet.priority})
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
          {/* Bottom notes */}
          <section className='my-2 w-full'>
            <div className={`w-fit border-b font-bold border-b-${switchColor(valkery.type)}`}>
              Additional notes:
            </div>
            {build.bottomNotes?.map((note, j) => (
              <div key={j}>
                {note.text && <div className='block w-full'>{note.text}</div>}
                {note.gif && <GifPlayer video={note.gif} />}
              </div>
            ))}
          </section>
        </div>
      </div>
      <hr className={`my-2 border-b border-${switchColor(valkery.type)}`} />
    </>
  );
}
