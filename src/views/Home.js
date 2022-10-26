import Section from '../../src/components/Section'

function Home() {
  const items = [
    {
      id: 1,
      title: 'Yeni nesil insan hakları',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/81eb55c7633dcdc418268f3698eb3394b35e3bd4',
    },
    {
      id: 2,
      title: 'Aldor',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706c0000da84259c7bc5de0337fdafe64540',
    },
    {
      id: 3,
      title: 'Watchmen',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706c0000da843efad35a97131b9fabd4aa9e',
    },
    {
      id: 4,
      title: 'Wonders Of The Cosmos',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67616d00001e02e83c6e252bf4bb2ffd9d264e',
    },
    {
      id: 5,
      title: 'Deep Field',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67616d00001e02b255af95a194f11d539ae52d',
    },
    {
      id: 6,
      title: 'Tanrı nın Sebepsiz Kötülüklere İzin Vermesinin Sebebi Ne?',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab6765630000f68db54fd36cfd7c5e05edc5d79e',
    },
    {
      id: 7,
      title: 'Japanese Garden',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/ab67706f00000002774b8e66231c616e605c8a13',
    },
  ]
  return (
    <div>
      <Section title="Kaldığın yerden devam e!" more="/blabla" items={items} />
    </div>
  )
}
export default Home
