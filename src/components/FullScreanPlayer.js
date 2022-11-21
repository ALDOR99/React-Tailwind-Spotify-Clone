import { useSelector } from "react-redux";

function FullScreenPlayer({ toogle }) {
  const { current } = useSelector((state) => state.player);

  return (
    <div className="bg-">
      {current.title}
      <button onClick={toogle}> Kapat</button>
    </div>
  );
}

export default FullScreenPlayer;
