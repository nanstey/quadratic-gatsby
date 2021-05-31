import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { sortBy, values } from "underscore";

function itemFactory(items) {
  const newItems = items.map((item) => {
    const [title, ageRange, dateRange] = item.name.split(" // ").reverse();

    const [ageMin, ageMax] = ageRange ? ageRange.slice(5).split("-") : [6, 14];

    const [month, days] = dateRange ? dateRange.split(" ") : [];
    const [dayStart, dayEnd] = days ? days.split("-") : [];
    const dateStart = dayStart ? dayjs(`2021 ${month} ${dayStart}`, "YYYY MMM D") : null;
    const dateEnd = dayEnd ? dayjs(`2021 ${month} ${dayEnd}`, "YYYY MMM D") : null;

    return {
      itemId: item.item_id,
      sku: item.sku,
      title,
      ageMin: Number(ageMin),
      ageMax: Number(ageMax),
      dateStart,
      dateEnd,
      summary: item.summary,
      details: item.details,
      image: item.image,
    };
  });

  return newItems;
}

export default function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/checkfrontAPI", {
        params: { route: "item", category_id: 37 },
      })
      .then((res) => {
        setItems(itemFactory(sortBy(values(res.data.items), "pos").reverse()));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log("Error: ", err.message);
      });
  }, []);

  return items;
}
