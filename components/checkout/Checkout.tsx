import React, { useContext, useEffect, useState } from "react";
import CheckoutProductCard from "../common/UiKit/CheckoutProductCard";
import CheckoutTab from "./CheckoutTab";
import Input from "../common/UiKit/Input";
import AddAddress from "./radio-content/AddAddress";
import { ProfileContext } from "../../context/ProfileContext";
import { BasketContext } from "../../context/BasketContext";
import { IPaymentMethod } from "../../interfaces/PaymentMethod";
import { IShippingMethods } from "../../interfaces/ShippingMethods";
import { IPoint } from "../../interfaces/Points";
import Points from "./radio-content/Points";
import { useStorage } from "../../hooks/hooks.storage";
import { IUserAddresses } from "../../interfaces/UserAddresses";
import useForm from "../../hooks/hooks.form";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import useHttp from "../../hooks/hooks.http";
import { IPagination } from "../../interfaces/Pagination";
import { useMobile } from "../../hooks/hooks.mobile";
import HeaderMobile from "../common/HeaderMobile";

interface Props {
  paymentMethods: IPaymentMethod[];
  shippingMethods: IShippingMethods[];
  points: IPoint[];
}
interface ShippingAddress {
  city: string;
  country: string;
  district: string;
  street: string;
  house: string;
  apartment: string;
  entrance: string;
  floor: string;
  intercom: string;
  title: string;
  first_name: string;
  last_name: string;
  state: string;
  postcode: string;
  phone_number: string;
  notes: string;
}

interface ICheckoutForm {
  basket: number;
  guest_email?: string;
  shipping_method_code: string;
  shipping_address?: ShippingAddress;
  billing_address?: ShippingAddress;
  pickup_point: number;
  payment_source: string;
  customer_email?: string;
  customer_name?: string;
  customer_phone?: string;
}
function Checkout({ paymentMethods, shippingMethods, points }: Props) {
  const router = useRouter();
  const { isMobile } = useMobile();
  const { basket, updateBasket } = useContext(BasketContext);
  const { token } = useContext(AuthContext);
  const { reInitProfile, profile } = useContext(ProfileContext);
  const { request } = useHttp();
  const { formChangeHandler, formSubmitHandler, setForm, form } = useForm(
    onSuccess,
    {},
    true
  );
  const [checkedValue, setCheckedValue] = useState({
    customer_address: "pickup",
    payment_source: paymentMethods[0].code,
    customer_bonuses: false,
  });
  const [isOpen, setIsOpen] = useState({
    customer: true,
    shippingAddress: false,
    paymentMethods: false,
    bonuses: false,
  });
  const [isChecked, setIsChecked] = useState({
    customer: false,
    shippingAddress: false,
    paymentMethods: false,
    bonuses: false,
  });
  const [formChecked, setFormChecked] = useState<ICheckoutForm>({
    basket: 0,
    shipping_method_code: "pickup",
    pickup_point: null,
    payment_source: paymentMethods[0].code,
  });
  const { get: getAddressesFromStorage, removeStorage } =
    useStorage("4GeekUserAddress");
  const [userAddresses, setUserAddresses] = useState<IUserAddresses[]>([]);

  useEffect(() => {}, [isOpen, isChecked]);
  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      text: { ...prevState.text, ...formChecked, basket: basket?.id },
    }));
  }, [formChecked]);
  useEffect(() => {
    setUserAddresses(getAddressesFromStorage || []);
  }, [removeStorage]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAddresses(getAddressesFromStorage());
    }
  }, []);
  useEffect(() => {
    console.log(checkedValue);
  }, [checkedValue]);
  useEffect(() => {
    console.log(form);
  }, [form]);
  useEffect(() => {
    if (!!token) {
      reInitProfile();
    }
  }, [token]);
  useEffect(() => {
    (async () => {
      if (!!token && !!profile) {
        setForm({
          text: {
            customer_name: profile?.first_name + " " + profile?.last_name,
            customer_phone: profile?.phone_number,
            customer_email: profile?.email,
          },
        });
        try {
          const data: IPagination<IUserAddresses> = await request(
            "/api/useraddresses/",
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          setUserAddresses([...data.results]);
        } catch (e) {}
      }
    })();
  }, [token, profile]);

  function checkedHandler(e) {
    if (e.target.name === "customer_address") {
      if (e.target.value === "pickup") {
        setFormChecked((prevState) => ({
          ...prevState,
          shipping_method_code: "pickup",
        }));
      } else if (e.target.id !== "add-address") {
        setFormChecked((prevState) => ({
          ...prevState,
          shipping_method_code: "shipping",
          shipping_address: userAddresses[e.target.dataset.id],
        }));
      }
    } else if (e.target.name === "payment_source") {
      setFormChecked((prevState) => ({
        ...prevState,
        payment_source: e.target.value,
      }));
    }
    e.target.type === "radio" &&
      setCheckedValue((prevState) => ({
        ...prevState,
        ...{
          [e.target.name]: e.target.value,
        },
      }));
    e.target.type === "checkbox" &&
      setCheckedValue((prevState) => ({
        ...prevState,
        ...{
          [e.target.name]: e.target.checked,
        },
      }));
  }
  function pointChooseHandler(point_id) {
    setFormChecked((prevState) => ({ ...prevState, pickup_point: point_id }));
    setIsOpen((prevState) => ({
      ...prevState,
      shippingAddress: false,
      paymentMethods: true,
    }));
    setIsChecked((prevState) => ({
      ...prevState,
      shippingAddress: true,
    }));
  }
  async function onSuccess() {
    await updateBasket();
    await router.push("/");
  }
  function onAddAddress(address) {
    setUserAddresses((prevState) => [...prevState, address]);
    setFormChecked((prevState) => ({
      ...prevState,
      shipping_method_code: "shipping",
      shipping_address: address,
    }));
    setCheckedValue((prevState) => ({
      ...prevState,
      customer_address: address.address_name,
    }));
  }

  return (
    <>
      {isMobile && <HeaderMobile title={"Оформление заказа"} />}
      <section className="checkout__section">
        <div className="checkout__container">
          <div className="checkout__box">
            <form
              method={"POST"}
              data-method={"POST"}
              action={"/api/checkout/"}
              onSubmit={formSubmitHandler}
              className="checkout__main"
            >
              {!isMobile && (
                <h1 className="section-title checkout__title">
                  Оформление заказа
                </h1>
              )}
              <CheckoutTab
                title={"Покупатель"}
                number={1}
                isDefaultOpen={isOpen.customer}
                isChecked={isChecked.customer}
              >
                <div className="checkout-tab__inputs">
                  <Input
                    label={"Имя"}
                    required={true}
                    name={"customer_name"}
                    id={"customer_name"}
                    onInput={formChangeHandler}
                    type={"text"}
                    defaultValue={
                      !!profile
                        ? profile?.first_name + " " + profile?.last_name
                        : ""
                    }
                  />
                  <Input
                    label={"Номер телефона"}
                    required={true}
                    name={"customer_phone"}
                    id={"customer_phone"}
                    onInput={formChangeHandler}
                    type={"tel"}
                    defaultValue={profile?.phone_number}
                  />
                  <Input
                    label={"E-Mail"}
                    required={true}
                    name={"customer_email"}
                    id={"customer_email"}
                    onInput={formChangeHandler}
                    type={"email"}
                    defaultValue={profile?.email}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen((prevState) => ({
                        ...prevState,
                        customer: false,
                        shippingAddress: true,
                      }));
                      setIsChecked((prevState) => ({
                        ...prevState,
                        customer: true,
                      }));
                    }}
                    className="checkout-tab__submit"
                  >
                    Подтвердить
                  </button>
                </div>
              </CheckoutTab>
              <CheckoutTab
                title={"Адрес доставки"}
                number={2}
                isDefaultOpen={isOpen.shippingAddress}
                isChecked={isChecked.shippingAddress}
              >
                <div className="checkout-tab__box">
                  <div className="checkout-tab__inputs">
                    <div className="checkout-tab__radio">
                      <input
                        type="radio"
                        name={"customer_address"}
                        id={"pointsShipping"}
                        value={"pickup"}
                        defaultChecked={
                          checkedValue["customer_address"] === "pickup"
                        }
                        className={
                          checkedValue["customer_address"] === "pickup"
                            ? "checked"
                            : ""
                        }
                        onChange={checkedHandler}
                      />
                      <label htmlFor="pointsShipping">Самовывоз</label>
                    </div>
                    {userAddresses.map((userAddress, id) => (
                      <div key={id} className="checkout-tab__radio">
                        <input
                          type="radio"
                          name={"customer_address"}
                          id={"userAddress-" + id}
                          data-id={id}
                          defaultChecked={
                            checkedValue["customer_address"] ===
                            userAddress.address_name
                          }
                          value={userAddress.address_name}
                          onChange={checkedHandler}
                        />
                        <label htmlFor={"userAddress-" + id}>
                          {userAddress.address_name} адрес
                        </label>
                      </div>
                    ))}
                    {!userAddresses.length && (
                      <div className="checkout-tab__radio">
                        <input
                          type="radio"
                          name={"customer_address"}
                          id={"add-address"}
                          value={"Добавить адрес"}
                          onChange={checkedHandler}
                        />
                        <label htmlFor="add-address">Добавить адрес</label>
                      </div>
                    )}
                  </div>
                  <div className="checkout-tab__radio-contents">
                    {checkedValue["customer_address"] === "pickup" && (
                      <Points
                        points={points}
                        onPointChoose={pointChooseHandler}
                      />
                    )}
                    {!!userAddresses.length &&
                      userAddresses.map(
                        (userAddress, id) =>
                          checkedValue["customer_address"] ===
                            userAddress.address_name && (
                            <div
                              key={id}
                              className="checkout-tab__radio-content"
                            >
                              <div className="checkout-tab__radio-text">
                                <p>
                                  {userAddress.country} {userAddress.postcode}{" "}
                                  {userAddress.district} обл.,{" "}
                                  {userAddress.city}, {userAddress.street}, д.{" "}
                                  {userAddress.house}, кв.{" "}
                                  {userAddress.apartment}, под.{" "}
                                  {userAddress.entrance}, дмф.{" "}
                                  {userAddress.intercom}, эт.{" "}
                                  {userAddress.floor}
                                </p>
                              </div>
                              <div className="checkout-tab__radio-settings-buttons">
                                <button className="checkout-tab__radio-settings-button">
                                  Редактировать
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    removeStorage();
                                    setCheckedValue((prevState) => ({
                                      ...prevState,
                                      customer_address: "Добавить адрес",
                                    }));
                                  }}
                                  className="checkout-tab__radio-settings-button"
                                >
                                  Удалить
                                </button>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsOpen((prevState) => ({
                                    ...prevState,
                                    shippingAddress: false,
                                    paymentMethods: true,
                                  }));
                                  setIsChecked((prevState) => ({
                                    ...prevState,
                                    shippingAddress: true,
                                  }));
                                }}
                                className="checkout-tab__submit"
                              >
                                Подтвердить
                              </button>
                            </div>
                          )
                      )}
                    {!userAddresses.length &&
                      checkedValue["customer_address"] === "Добавить адрес" && (
                        <AddAddress onAddAddress={onAddAddress} />
                      )}
                  </div>
                </div>
              </CheckoutTab>
              <CheckoutTab
                title={"Способы оплаты"}
                number={3}
                isDefaultOpen={isOpen.paymentMethods}
                isChecked={isChecked.paymentMethods}
              >
                <div className="checkout-tab__box">
                  <div className="checkout-tab__inputs">
                    {paymentMethods.map((paymentMethod) => (
                      <div
                        key={paymentMethod.id}
                        className="checkout-tab__radio"
                      >
                        <input
                          type="radio"
                          name={"payment_source"}
                          id={paymentMethod.code}
                          value={paymentMethod.code}
                          defaultChecked={
                            checkedValue["payment_source"] ===
                            paymentMethod.code
                          }
                          onChange={checkedHandler}
                        />
                        <label htmlFor={paymentMethod.code}>
                          {paymentMethod.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="checkout-tab__radio-contents">
                    {paymentMethods.map((paymentMethod) => {
                      if (
                        checkedValue["payment_source"] === paymentMethod.code
                      ) {
                        return (
                          <div
                            key={paymentMethod.code}
                            className="checkout-tab__radio-content"
                          >
                            <div className="checkout-tab__radio-text">
                              <p>{paymentMethod.description}</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setIsOpen((prevState) => ({
                                  ...prevState,
                                  paymentMethods: false,
                                  bonuses: true,
                                }));
                                setIsChecked((prevState) => ({
                                  ...prevState,
                                  paymentMethods: true,
                                }));
                              }}
                              className="checkout-tab__submit"
                            >
                              Подтвердить
                            </button>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </CheckoutTab>
              <CheckoutTab
                title={"Бонусы и акции"}
                number={4}
                isDefaultOpen={isOpen.bonuses}
                isChecked={!isOpen.bonuses}
              >
                <div className="checkout-tab__box">
                  <div className="checkout-tab__inputs">
                    <div className="checkout-tab__radio">
                      <input
                        type="radio"
                        name={"customer_bonuses"}
                        id={"customer_bonuses"}
                        onChange={checkedHandler}
                      />
                      <label htmlFor="customer_bonuses">
                        Использовать бонусы
                      </label>
                    </div>
                    <div className="checkout-tab__radio">
                      <input
                        type="radio"
                        name={"customer_bonuses"}
                        id={"no_customer_bonuses"}
                        defaultChecked={true}
                      />
                      <label htmlFor="no_customer_bonuses">
                        Не использовать бонусы
                      </label>
                    </div>
                  </div>
                  <div className="checkout-tab__radio-contents">
                    <div className={"checkout-tab__radio-content "}>
                      <div className="checkout-tab__radio-text">
                        <p>
                          <span>1 Бонус = 1 тенге.</span> Ваши бонусы будут
                          списаны автоматически. Баллы, не используемые долгое
                          время сгорают.
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen((prevState) => ({
                            ...prevState,
                            bonuses: false,
                          }));
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  </div>
                </div>
              </CheckoutTab>
              <button type="submit" className="checkout-tab__submit">
                Оформить заказ
              </button>
            </form>
            <div className="checkout__receipt checkout-receipt">
              <div className="checkout-receipt__box">
                <div className="checkout-receipt__header">
                  {basket && <p>Количество товаров: {basket.lines.length}</p>}
                  <button aria-label="Изменить состав заказа">Изменить</button>
                </div>
                <div className="checkout-receipt__body">
                  <div className="checkout-receipt__item">
                    <div className="checkout-receipt__name">Доставка:</div>
                    <div className="checkout-receipt__value">1 000 ₸</div>
                  </div>
                  <div className="checkout-receipt__item">
                    <div className="checkout-receipt__name">К оплате:</div>
                    <div className="checkout-receipt__value">
                      <span>
                        {basket &&
                          parseFloat(
                            basket?.total_incl_tax
                          ).toLocaleString()}{" "}
                        ₸
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-receipt__products">
                {basket &&
                  basket.lines.map((line) => (
                    <CheckoutProductCard key={line.id} line={line} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
