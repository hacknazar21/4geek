import { IPromotion } from "../../interfaces/Promotion";
interface Props {
  promotion: IPromotion;
}
function PromoInfo({ promotion }: Props) {
  return (
    <section className="promotion__info promotion-info">
      <div className="promotion-info__container">
        <h2 className="promotion-info__title section-title">
          {promotion.title}
        </h2>
        <div className="promotion-info__text">{promotion.description}</div>
      </div>
    </section>
  );
}

export default PromoInfo;
