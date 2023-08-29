import Card from '@/components/Card';
import { valks } from '@/data/visibleValks';

export default function Home() {
  return (
    <main>
      {valks.map((valk) => {
        return <Card key={valk.label} valkery={valk} />;
      })}
    </main>
  );
}
