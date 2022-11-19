import categories from "data/categories";

//----------------------------------------------------------------

function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
      </div>
    </div>
  );
}

//----------------------------------------------------------------

function Search() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
}
export default Search;

//----------------------------------------------------------------
