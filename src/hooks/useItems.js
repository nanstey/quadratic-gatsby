import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { sortBy, values, range } from "underscore";

function itemFactory(items) {
  const newItems = items.map((item) => {
    const [title, ageRange] = item.name.split(" // ").reverse();
    const [ageMin, ageMax] = ageRange ? ageRange.slice(5).split("-") : [6, 14];

    return {
      itemId: item.item_id,
      sku: item.sku,
      title,
      ageMin: Number(ageMin),
      ageMax: Number(ageMax),
      dateStart: dayjs(item.rate.start_date, "YYYYMMDD"),
      dateEnd: dayjs(item.rate.end_date, "YYYYMMDD"),
      summary: item.summary,
      details: item.details,
      image: item.image,
      available: item.rate.available,
      price: item.rate.summary.price.total,
      tags: item.tags.map((tag) => tag.name) ?? [],
    };
  });

  return newItems;
}

function getDateArray() {
  const startDate = dayjs("2021-07-06", "YYYY-MM-D");

  return range(8).map((i) => startDate.add(i * 7, "days"));
}

export default function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const dateArray = getDateArray();

      const promises = dateArray.map((date) =>
        axios.get("/api/checkfrontAPI", {
          params: { route: "item", category_id: 37, date: date.format("YYYYMMDD") },
        }),
      );

      axios.all(promises).then(
        axios.spread((...responses) => {
          const spreadItems = responses.flatMap((res) => {
            return values(res.data.items).filter(
              (item) => item.item_id !== 155 && item.visibility === "*",
            );
          });

          setItems(itemFactory(sortBy(spreadItems, "pos").reverse()));
        }),
      );;
    }

    getItems();
  }, []);

  return items;
}
