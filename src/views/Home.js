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
      title: 'Yeni nesil insan hakları',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/81eb55c7633dcdc418268f3698eb3394b35e3bd4',
    },
    {
      id: 3,
      title: 'Yeni nesil insan hakları',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/81eb55c7633dcdc418268f3698eb3394b35e3bd4',
    },
    {
      id: 4,
      title: 'Yeni nesil insan hakları',
      description: 'Ağu 2021',
      image: 'https://i.scdn.co/image/81eb55c7633dcdc418268f3698eb3394b35e3bd4',
    },
  ]
  return (
    <div>
      <Section
        title="Dinleyicileri arasında popüler: Evrim Ağacı ile Bilime Dair Her Şey!"
        more="/blabla"
        items={items}
      />
    </div>
  )
}
export default Home
