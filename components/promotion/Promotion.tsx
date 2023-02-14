import PromoSlider from "./PromoSlider";
import PromoInfo from "./PromoInfo";
import PromoProducts from "./PromoProducts";
import { IPromotion } from "../../interfaces/Promotion";

interface Props {
  promotion: IPromotion;
}

function Promotion({ promotion }: Props) {
  return (
    <>
      <PromoSlider promotion={promotion} />
      <PromoInfo promotion={promotion} />
      <PromoProducts />
    </>
  );
}

export default Promotion;
