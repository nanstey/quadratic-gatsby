import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { sortBy, values, range } from "underscore";

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
      available: item.rate.available,
      price: item.rate.summary.price.total,
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
            return values(res.data.items).filter((item) => item.item_id !== 155);
          });

            const itemz = itemFactory(sortBy(spreadItems, "pos").reverse());
            
            console.log(itemz);

            setItems(itemz);
        }),
      );;
    }

    getItems();
  }, []);

  return items;
}
