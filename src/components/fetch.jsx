import { useState, useEffect } from "react";

export function Housing_data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Kasa-OCR/data/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return data;
}

export function Data_id(uid) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Kasa-OCR/data/data.json");
      const jsonData = await response.json();
      const idData = await jsonData.filter((p) => p.id === uid);
      setData(idData);
    };
    fetchData();
  }, [uid]);

  return data;
}
