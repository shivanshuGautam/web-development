
import banner1 from "../assets/images/banner1.jpg";

function Slider() {
  return (
    <img
      src={banner1}
      alt="Banner"
      className="w-full h-[600px] object-cover"
    />
  );
}

export default Slider;