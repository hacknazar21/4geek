import "../src/scss/style.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import useHttp from "../hooks/hooks.http";
import { createContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import NextNProgress from "nextjs-progressbar";
import { IBasket, Line } from "../interfaces/Basket";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/hooks.auth";
import { IProfile } from "../interfaces/Profile";
import { useRouter } from "next/router";
import { BasketContext } from "../context/BasketContext";
import { ProfileContext } from "../context/ProfileContext";
import { ErrorContext } from "../context/ErrorContext";
import ErrorWindow from "../components/ErrorWindow";

export default function App({ Component, pageProps }: AppProps) {
  const { request, loading } = useHttp();
  const router = useRouter();
  const { token, refreshToken, login, logout } = useAuth();
  const [basket, setBasket] = useState<IBasket>(null);
  const [profile, setProfile] = useState<IProfile>(null);
  const [textError, setTextError] = useState<string>(null);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [loadingBasket, setLoadingBasket] = useState<boolean>(false);
  let errorTimer = null;

  const initBasket = async () => {
    try {
      const data = await request("/api/basket/");
      setBasket({ ...data });
    } catch (e) {}
  };
  const initProfile = async () => {
    try {
      const data: IProfile = await request("/api/profile/", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setProfile({ ...data });
    } catch (e) {
      const error = JSON.parse(e.message);
      if (error["code"] === "token_not_valid") {
        try {
          const data = await request(
            "/api/auth/token/refresh/",
            "POST",
            {
              refresh: refreshToken,
            },
            {
              "Content-Type": "application/json",
            }
          );
          await login(data.access, refreshToken);
        } catch (e) {
          await logout();
        }
      }
    }
  };
  const addProductToBasket = async (product: IProduct) => {
    try {
      setLoadingBasket(true);
      const headers = {
        "Content-Type": "application/json",
      };
      if (!!token) headers["Authorization"] = `Bearer ${token}`;
      const data: IBasket = await request(
        "/api/basket/add-product/",
        "POST",
        {
          quantity: 1,
          product: product.id,
        },
        headers
      );
      setBasket({ ...data });
    } catch (e) {
    } finally {
      setLoadingBasket(false);
    }
  };
  const removeOneProductFromLine = async (line: Line) => {
    try {
      if (line.quantity - 1 === 0) {
        await removeLineFromBasket(line);
      } else {
        await request(
          `/api/baskets/${basket.id}/lines/${line.id}/`,
          "PATCH",
          {
            quantity: line.quantity - 1,
          },
          {
            "Content-Type": "application/json",
          }
        );
        await initBasket();
      }
    } catch (e) {
      await initBasket();
    }
  };
  const removeLineFromBasket = async (line: Line) => {
    try {
      await request(`/api/baskets/${basket.id}/lines/${line.id}/`, "DELETE");
      await initBasket();
    } catch (e) {
      await initBasket();
    }
  };
  const removeBasket = async () => {
    try {
      await request(`/api/baskets/${basket.id}/`, "DELETE");
      await initBasket();
    } catch (e) {
      await initBasket();
    }
  };
  const addOneProductToLine = async (line: Line) => {
    try {
      await request(
        `/api/baskets/${basket.id}/lines/${line.id}/`,
        "PATCH",
        {
          quantity: line.quantity + 1,
        },
        {
          "Content-Type": "application/json",
        }
      );
      await initBasket();
    } catch (e) {
      await initBasket();
    }
  };
  const updateProfile = (newProfile: IProfile) => {
    setProfile({ ...newProfile });
  };
  const showError = (text: string) => {
    if (!isShowError) {
      setTextError(text);
      setIsShowError(true);
      errorTimer = setTimeout(() => {
        setIsShowError(false);
      }, 5000);
    }
  };

  useEffect(() => {
    (async () => {
      await initBasket();
    })();
  }, []);
  useEffect(() => {
    if (!!token)
      (async () => {
        await initProfile();
      })();
  }, [token]);
  useEffect(() => {
    document.querySelector("header")?.scrollIntoView({ behavior: "smooth" });
  }, [router.pathname]);
  useEffect(() => {
    if (!isShowError && !!errorTimer) clearTimeout(errorTimer);
  }, [isShowError, errorTimer]);

  return (
    <>
      <NextNProgress
        color="linear-gradient(90deg, #564696 0%, #8676C5 100%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Head>
        <title>{loading && "Loading..."}</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ErrorContext.Provider value={{ showError }}>
        <BasketContext.Provider
          value={{
            basket,
            addProductToBasket,
            removeOneProductFromLine,
            removeLineFromBasket,
            removeBasket,
            loadingBasket,
            addOneProductToLine,
            updateBasket: initBasket,
          }}
        >
          <AuthContext.Provider value={{ token, login, logout }}>
            <ProfileContext.Provider
              value={{ profile, updateProfile, reInitProfile: initProfile }}
            >
              <ErrorWindow
                show={isShowError}
                setShow={setIsShowError}
                text={textError}
              />
              <Component {...pageProps} />
            </ProfileContext.Provider>
          </AuthContext.Provider>
        </BasketContext.Provider>
      </ErrorContext.Provider>
    </>
  );
}
