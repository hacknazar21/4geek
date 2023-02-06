import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
interface Props {
  categories: IPagination<ICategory>;
  children: typeof React.Children;
  className: string;
}
export default function CommonLayout({
  children,
  className,
  categories,
}: Props) {
  const classes = ["main", className];
  return (
    <div className={"wrapper wrapper-" + className}>
      <Header categories={categories?.results || []} />
      <main className={classes.join(" ")}>{children}</main>
      <Footer />
    </div>
  );
}
