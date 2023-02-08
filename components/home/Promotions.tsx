import SeeAll from "../common/SeeAll";
import PromotionCard from "../common/UiKit/PromotionCard";

interface Props {
  title: string;
  promotions: {
    id: number;
    model: string;
    title: string;
    description: string;
    tall_image: string;
    square_image: string;
    slug: string;
    benefit: number;
    pk: string;
  }[];
}

function Promotions({ title, promotions }: Props) {
  if (!!promotions?.length)
    return (
      <section className="home__promotions promotions">
        <div className="promotions__container">
          <div className="section-header promotions__header">
            <h2 className="promotions__title section-title">{title}</h2>
            <SeeAll link="/promotions/" text={"смотреть все"} />
          </div>
          <div className="promotions__grid">
            {promotions.map((promotion, id) => {
              if (id === 0)
                return (
                  <div key={promotion.id} className="promotions__grid-item">
                    <PromotionCard
                      link={promotion.slug}
                      image={promotion.square_image}
                    />
                  </div>
                );
              return (
                <div key={promotion.id} className="promotions__grid-item">
                  <PromotionCard
                    link={promotion.slug}
                    image={promotion.tall_image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  else return <></>;
}

export default Promotions;
