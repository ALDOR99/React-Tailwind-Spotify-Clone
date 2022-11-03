import Section from '../../src/components/Section'

function Home() {
  const items = [
    {
      id: 1,
      title: 'Yeni nesil insan hakları',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/81eb55c7633dcdc418268f3698eb3394b35e3bd4',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 2,
      title: 'Aldor',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706c0000da84259c7bc5de0337fdafe64540',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 3,
      title: 'Watchmen',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706c0000da843efad35a97131b9fabd4aa9e',
      type: 'artist',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 4,
      title: 'Wonders Of The Cosmos',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67616d00001e02e83c6e252bf4bb2ffd9d264e',
      type: 'podcast',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 5,
      title: 'Deep Field',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67616d00001e02b255af95a194f11d539ae52d',
      type: 'podcast',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 6,
      title: 'Tanrı nın Sebepsiz Kötülüklere İzin Vermesinin Sebebi Ne?',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab6765630000f68db54fd36cfd7c5e05edc5d79e',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
    {
      id: 7,
      title: 'Japanese Garden',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706f00000002774b8e66231c616e605c8a13',
      type: 'podcast',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3',
    },
  ]
  return (
    <div className="grid gap-y-8">
      <Section title="Kaldığın yerden devam et" more="/blabla" items={items} />
      <Section title="Beğendiklerin ve dahası" more="/blabla" items={items} />
      <Section title="Klasik müziğin devrimi" more="/blabla" items={items} />
      <Section title="Epic müzik" more="/blabla" items={items} />
    </div>
  )
}
export default Home
