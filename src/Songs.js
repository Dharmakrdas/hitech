const Songs = ({details}) => {
  return (
    <div className=" mt-6 mb-6 mr-12">
      <div className=" h-28 w-24 rounded-sm">
      <img
        src={details.img_url}
        alt="Veera Dheera"
        className="h-full w-full rounded-md"
      ></img>
      </div>
      <div >
        <p className=" font-bold text-xs">{details.name}</p>
        <p className=" font-normal text-xs">{details.time}</p>
      </div>
    </div>
  ); 
};
export default Songs;
