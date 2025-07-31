import { DragEvent } from "react";
import { SongObj } from "./Song";

export function onDragStart(event: DragEvent<HTMLElement>) {
	const target = event.currentTarget;

	// Use querySelector correctly and check for null
	const img = target.querySelector('img');
	const titleSpan = target.querySelector('span.title');
	const artistSpan = target.querySelector('span.artist');

	const songObj: SongObj = {
		coverImageUrl: img?.src || '',
		title: titleSpan?.innerHTML || '',
		artist: artistSpan?.innerHTML || ''
	};

	event.dataTransfer.setData('text/plain', JSON.stringify(songObj));
}

export function onDrop(event: DragEvent<HTMLElement>) {
	event.preventDefault();
	const data: SongObj = JSON.parse(event.dataTransfer.getData('text/plain'));
	if (!data.coverImageUrl) return;
	const el = document.createElement('div')
	el.style.backgroundImage = `url(${data.coverImageUrl})`
	el.setAttribute('data-label', data.title)
	event.currentTarget.appendChild(el)
};