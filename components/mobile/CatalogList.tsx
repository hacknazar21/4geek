import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface CatalogList {
  image: string;
  name: string;
  slugParent: string;
  list: {
    name: string;
    link: string;
  }[];
}
function CatalogList({ image, name, list = [], slugParent }: CatalogList) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="catalog-mobile__item">
      <div
        onClick={async () => {
          if (!!list?.length) setIsOpen((prevState) => !prevState);
          else await router.push("/catalog/[link]", "/catalog/" + slugParent);
        }}
        className="catalog-mobile__item-header catalog-item-header"
      >
        <div className="catalog-item-header__info">
          <div className="catalog-item-header__image">
            <img src={image} alt="" />
          </div>
          <h2 className="catalog-item-header__title">{name}</h2>
        </div>
      </div>
      {isOpen && (
        <ul className="catalog-mobile-list">
          {list.map((listItem, id) => (
            <li key={id} className="catalog-mobile-list__item">
              <Link
                href="/catalog/[link]"
                as={"/catalog/" + listItem.link}
                className="catalog-mobile-list__link"
              >
                {listItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatalogList;
