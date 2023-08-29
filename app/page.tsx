import Card from '@/components/Card';
import argentKnightArtemis from '@/data/valks/ArgentKnightArtemis/valk';

export default function Home() {
  // Add valkeries here
  const valks = [argentKnightArtemis];

  return (
    <main>
      {valks.map((valk) => {
        return <Card key={valk.label} valkery={valk} />;
      })}
    </main>
  );
}
