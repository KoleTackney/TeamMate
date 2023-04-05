import * as React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

export interface GameCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function GameCard(
  { title, description, image, onClick }: GameCardProps,
) {
  return (
    <TouchableOpacity className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={image} alt={title} />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-center text-2xl">{description}</p>
      </div>
    </TouchableOpacity>
  );
}
