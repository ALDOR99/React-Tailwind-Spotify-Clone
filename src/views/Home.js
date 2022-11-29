import Section from "../../src/components/Section";
import songs from "data/songs";

//------------------------------------------------------------------------------

function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Kaldığın yerden devam et" more="/blabla" items={songs} />
      <Section title="Beğendiklerin ve dahası" more="/blabla" items={songs} />
      <Section title="Klasik müziğin devrimi" more="/blabla" items={songs} />
      <Section title="Epic müzik" more="/blabla" items={songs} />
    </div>
  );
}
export default Home;
