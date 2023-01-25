import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Select({
  selectClass,
  selectHeadClass,
  key,
  callback,
  name,
  title,
  items,
  search = false,
  defaultValue,
  label,
  htmlFor,
  inputBoxClass = "input__box full",
  labelClass = "input__label",
  inputClass = "input__item",
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState([]);
  const wrapper = React.createRef();
  const head = React.createRef();
  const router = useRouter();
  useEffect(() => {
    if (items && !list.length) setList(items);
  }, [items]);
  useEffect(() => {
    if (list.length > 0 && !height) {
      wrapper.current?.setAttribute(
        "style",
        `transform: translateY(-2000px); max-height:none;`
      );
      const height = wrapper.current?.getBoundingClientRect().height;
      wrapper.current?.setAttribute(
        "style",
        `transform: translateY(-2000px); max-height:0px;`
      );
      setHeight(height);
    }
  }, [list, router]);
  useEffect(() => {
    if (wrapper.current && open) {
      wrapper.current.setAttribute("style", `max-height:${height}px;`);
      wrapper.current.parentElement.classList.add("open");
    } else if (wrapper.current && !open && items?.length) {
      wrapper.current.setAttribute("style", `max-height:0px;`);
      wrapper.current.parentElement.classList.remove("open");
    }
  }, [open]);

  function clickHandler(event) {
    if (!search) setOpen((prevState) => !prevState);
    if (search) setOpen(true);
  }

  function selectHandler(name, value, display_name) {
    if (wrapper.current) {
      setOpen((prevState) => !prevState);
      wrapper.current.setAttribute("style", `max-height:0px;`);
      if (!search && head.current) {
        head.current.innerText = display_name;
        callback({
          target: {
            type: "text",
            name,
            value,
          },
        });
      } else setSearchInput(value);
    }
  }

  useEffect(() => {
    if (!!searchInput && searchInput !== "" && searchInput !== "") {
      setList((prevState) => {
        return items.filter(
          (listItem) =>
            listItem.name
              .toLowerCase()
              .indexOf(searchInput.trim().toLowerCase()) !== -1
        );
      });
    } else setList(items);
    if (search) {
      callback({
        target: {
          type: "text",
          name,
          value: searchInput,
        },
      });
    }
  }, [searchInput]);
  useEffect(() => {
    if (defaultValue) setSearchInput(defaultValue);
  }, [defaultValue]);
  function closeClickHandler(e) {
    e.preventDefault();
    setOpen(false);
  }
  return (
    <div
      className={"select" + " " + selectClass}
      id={"select-" + name}
      key={key}
    >
      {label && (
        <label htmlFor={htmlFor} className={labelClass}>
          {label}
        </label>
      )}
      {search && (
        <div className={inputBoxClass}>
          <input
            type="text"
            className={inputClass}
            name={name}
            onFocus={clickHandler}
            onClick={clickHandler}
            value={searchInput}
            onInput={(e) => {
              if (e.target.value === "") {
                setSearchInput(" ");
              } else setSearchInput(e.target.value);
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setSearchInput(" ");
              } else setSearchInput(e.target.value);
            }}
          />
          <label htmlFor={htmlFor} className={labelClass}>
            {label}
          </label>
          <button onClick={closeClickHandler} className={"arrow-close"}>
            <span></span>
            <span></span>
          </button>
        </div>
      )}
      {!search && (
        <div
          ref={head}
          onClick={clickHandler}
          className={"select__head " + selectHeadClass}
        >
          {title}
        </div>
      )}
      <ul ref={wrapper} className="select__list">
        {list?.map((item, id) => {
          return (
            <li
              key={id}
              onClick={() => {
                selectHandler(name, item.value, item.name);
              }}
              className="select__option"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
