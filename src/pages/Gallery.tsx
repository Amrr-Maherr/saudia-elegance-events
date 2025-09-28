"use client";

import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [media, setMedia] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiles = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/files");
        const files = await res.json();
        setMedia(files.filter((m: any) => m.type !== "other"));
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, []);

  const getFilteredItems = () => {
    const videoItems = media.filter((item) => item.type === "video");
    const imageItems = media.filter((item) => item.type === "image");

    const sortedVideos = [...videoItems].sort(
      (a, b) => b.duration - a.duration
    );
    const topVideos = sortedVideos.slice(0, 3);

    const topVideoIds = new Set(topVideos.map((v) => v.id));
    const remainingVideos = videoItems.filter((v) => !topVideoIds.has(v.id));

    if (filter === "all") {
      return [...topVideos, ...remainingVideos, ...imageItems];
    }

    if (filter === "video") {
      return [...topVideos, ...remainingVideos];
    }

    if (filter === "image") {
      return imageItems;
    }

    return [];
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setFilter("all")}>الكل</button>
        <button onClick={() => setFilter("video")}>الفيديوهات</button>
        <button onClick={() => setFilter("image")}>الصور</button>
      </div>

      {loading ? (
        <div>جاري التحميل...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {getFilteredItems().map((item, index) => (
            <div key={index} className="border p-2">
              {item.type === "video" ? (
                <video controls className="w-full">
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <img src={item.url} alt="media" className="w-full" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
