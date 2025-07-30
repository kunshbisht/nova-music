import React from "react";
import { onDragStart } from "./drag";

export type SongObj = {
	coverImageUrl: string;
	title: string;
	artist: string;
};

const Song = ({
	object: { coverImageUrl, title, artist },
}: {object: SongObj}) => (
	<div className="flex flex-col min-w-[200px]" draggable onDragStart={onDragStart}>
		{coverImageUrl ?
			<img
				src={coverImageUrl}
				alt={`${title} cover`}
				className="rounded-2xl transition cursor-pointer scale-90 hover:scale-100"
				draggable={false}
			/> : 
			<div className="bg-gray-500 animate-pulse w-full aspect-square rounded-2xl transition cursor-pointer scale-90 hover:scale-100" />
		}
		<span className="title font-bold text-xl mt-2">{title}</span>
		<span className="artist italic text-white/70">{artist}</span>
	</div>
);

const loadingSongObj: SongObj = {
	coverImageUrl: "",
	title: "Song",
	artist: "Artist",
};

const ShelfItems = ({ list }: { list: SongObj[] }) => (
	<div className="flex gap-4 overflow-x-scroll">
		{list.map((o, i) => (
			<Song object={o} key={i} />
		))}
	</div>
);

type ShelfProps = {
	name: string;
	list: SongObj[];
};

const Shelf = ({ name, list }: ShelfProps) => (
	<div className="flex flex-col gap-4">
		<h2 className="font-bold text-3xl">{name}</h2>
		<ShelfItems list={list} />
	</div>
);

export { ShelfItems, Shelf, loadingSongObj };
