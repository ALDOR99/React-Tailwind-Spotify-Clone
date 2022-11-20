import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import Title from "Title";
import ScrollContainer from "react-indiana-drag-scroll";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Icon } from "Icons";
//----------------------------------------------------------------

function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

//----------------------------------------------------------------

function WideCategory({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[2%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
//----------------------------------------------------------------

function Search() {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;

        const isBegin = favoritesRef.current.scrollLeft === 0;

        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();

      favoritesRef?.current?.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef.current.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200;
  };
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200;
  };

  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />

        {prev && (
          <button onClick={slideFavoritesPrev}>
            <Icon size={24} name="prev" />
          </button>
        )}
        {next && (
          <button onClick={slideFavoritesNext}>
            <Icon size={24} name="next" />
          </button>
        )}

        <ScrollContainer
          innerRef={favoritesRef}
          className="flex scrollable overflow-x gap-x-6"
        >
          {favoriteCategories.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </ScrollContainer>
      </section>

      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Search;

//----------------------------------------------------------------
