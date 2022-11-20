import { Icon } from "Icons";
import Title from "Title";
//------------------------------------------------------------------------------------

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black/70 w-11 h-10 flex items-center justify-center absolute top-0 left-0"
      >
        <Icon size={24} name="search" />
      </label>
      <input
        type="text"
        id="search-input"
        className="h-10 bg-white pl-12 outline-none text-black text-sm max-w-full w-[22.75rem] rounded-3xl placeholder-black/50"
        placeholder="Sanatçilar,şarkilar veya podcast'ler"
      />
    </div>
  );
}
export default Search;
