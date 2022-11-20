import { NavLink } from "react-router-dom";
import SongItem from "../../src/components/SongItem";
import Title from "../../src/Title";
//-----------------------------------------------------------------------

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-7 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default Section;
